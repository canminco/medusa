<!DOCTYPE html>
<html lang="utf-8">
<head>
<meta name="viewport" charset="utf-8">
<link href="./WEB-INF/views/css/bootstrap.css" rel="stylesheet" media="screen">
<link href="./WEB-INF/views/css/bootstrap-theme.min.css" rel="stylesheet" media="screen">
<link href="./WEB-INF/views/css/medusa_def.css" rel="stylesheet" media="screen">
</head>
<body class = "container-fuild">
<header>
	<div class="container">
		<div class="row">
			<!-- 理财与资金信托统计监测信息报送系统 --><h2>综合管理平台</h2>
		</div>
</div>
</header>
<nav class="main-navigation">
	<div class="container-fuild	">
		<div class="row">
			<div class="col-sm-12">
				<div class="navbar-header">
					<span class="nav-toggle-button collapsed" data-toggle="collapse" data-target="#main-menu">
						<span class="sr-only">Toggle navigation</span>
						<i class="fa fa-bars"></i>
					</span>
				</div>
				<div class="collapse navbar-collapse" id="main-menu">
					<ul class="menu">
        				<li class="nav-current" role="presentation"><a href="#">首页</a></li>
        				<li  role="presentation"><a href="#">征信</a></li>
        				<li  role="presentation"><a href="#">金融统计</a></li>
        				<li  role="presentation"><a href="#">反洗钱监测</a></li>
        				<li  role="presentation"><a href="#">补录平台</a></li>
        				<li  role="presentation"><a href="#">系统管理</a></li>
					</ul>   
				</div>
			</div>
		</div>
	</div>
</nav>
<section class = "content-wrap">
	<div class = "container-fluid">
		<div class = "row">
			<aside class = "col-md-2 sidebar">
				<div>
					<ul>
					<li>
					<a href="#systemSetting"  class="nav-header collapsed firstmenu" data-toggle="collapse">
					<i class="glyphicon glyphicon-cog"></i>
					系统管理
					<span class="pull-right glyphicon glyphicon-chevron-down"></span>
					</a>
					<ul id="systemSetting" class="nav nav-list collapse " style="height: 0px;">
              			<li class=" active"><a class="secondmenu" href="http://www.baidu.com"><i class="glyphicon glyphicon-user"></i> 用户管理</a></li>
              			<li><a class="secondmenu" href="#"><i class="glyphicon glyphicon-th-list"></i> 菜单管理</a></li>
              			<li><a class="secondmenu" href="#"><i class="glyphicon glyphicon-asterisk"></i> 角色管理</a></li>
              			<li><a class="secondmenu" href="#"><i class="glyphicon glyphicon-edit"></i> 修改密码</a></li>
              			<li><a class="secondmenu" href="#"><i class="glyphicon glyphicon-eye-open"></i> 日志查看</a></li>
            		</ul>
            		</li>
            		</ul>
				</div>
			</aside>
			<main class = "col-md-10 main-content">
			
			</main>
		</div>
	</div>
</section>
</body>
<script type="text/javascript" src="./WEB-INF/views/js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="./WEB-INF/views/js/bootstrap.min.js"></script>
</html>
