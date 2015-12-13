var config = require("../config").initConfig();
var oracledb = require("oracledb");
var EventProxy = require('eventproxy');
medusa_Pool = null;
var data_Collection_Pool = null;

var numRows = 2;

var initOracleConnectPool = function(pool_name,callback) {
	if (pool_name==='medusa_Pool') {
		oracledb.createPool(config.medusa_Connect, function(err, pool) {
			/*		pool.getConnection( function(err , connection) {
						if (err) { console.error(err.message); return; }
					    connection.execute(
					      "SELECT * " +
					        "FROM user_table " ,[],
					      function(err, result)
					      {
					        if (err) { console.error(err.message); return; }
					        else {
					          console.log(result.metaData);
					          console.log("begin");
					          fetchRowsFromRS(connection,result.resultSet,numRows);
					          //console.log(result.rows);
					        }
					      });
					});*/
			console.log("1------"+require("util").inspect(pool));
			medusa_Pool = pool;
			callback;
		});
	}
/*
	data_Collection_Pool = oracledb.createPool(config.data_collect_Connect, function(err, pool) {
		if (pool) {
			console.log("data_collection_Pool is established");
		}
	});
*/
}

exports.initOracleConnectPool = initOracleConnectPool;

var query = function() {
	console.log('执行查询');
	medusa_Pool.getConnection(function(err, connection) {
		if (err) {
			console.error(err.message);
			return;
		}
		connection.execute(
			"SELECT * " +
			"FROM user_table ", [], {
				resultSet: true,
				prefetchRows: 2
			},
			function(err, result) {
				if (err) {
					console.error(err.message);
					return;
				} else {
					console.log(result.metaData);
					console.log("begin");
					fetchRowsFromRS(connection, result.resultSet, numRows);
					//console.log(result.rows);
				}
			});
	});
}

exports.query = query;

function fetchRowsFromRS(connection, resultSet, numRows) {
	resultSet.getRows(
		numRows,
		function(err, rows) {
			if (err) {
				console.error(err.message);
				return;
			} else if (rows.length == 0) {
				console.log("complete");
			} else if (rows.length > 0) {
				console.log(rows);
				console.log("handling");
				fetchRowsFromRS(connection, resultSet, numRows);
			}
		});
}


function query1(){
		if (!medusa_Pool) {
			console.log('444');
			initOracleConnectPool('medusa_Pool',function(err,pool){
				if(err){
					console.log('333');
				}
				query();
			});
	/*		var proxy = new EventProxy();
			proxy.all('init_pool',function(init_pool){
				console.log('4444444');
				query();
			})
			proxy.fail(console.log('3333333'));
			initOracleConnectPool(null,proxy.done('init_pool'));
			*/
		}
}

exports.query1 = query1;