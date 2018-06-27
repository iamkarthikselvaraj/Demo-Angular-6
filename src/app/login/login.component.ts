import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../core/auth.service';
import {TokenStorage} from '../core/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/bower_components/Ionicons/css/ionicons.min.css',
    '../../assets/bower_components/jvectormap/jquery-jvectormap.css',
    '../../assets/dist/css/AdminLTE.min.css',
    '../../assets/dist/css/skins/_all-skins.min.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage) {
    this.loadScript();
  }

  login(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['home']);
      }
    );
  }

  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes('loader')) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = ['assets/bower_components/fastclick/lib/fastclick.js', 'assets/bower_components/fastclick/lib/fastclick.js',
        'assets/dist/js/adminlte.min.js',
        'assets/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js',
        'assets/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
        'assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
        'assets/bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
        'assets/bower_components/chart.js/Chart.js'];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts [i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('body')[0].appendChild(node);
      }

    }
  }


}
