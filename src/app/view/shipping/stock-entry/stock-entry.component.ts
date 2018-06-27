import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-stock-entry',
  templateUrl: './stock-entry.component.html',
  styleUrls: ['../../../../assets/bower_components/select2/dist/css/select2.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class StockEntryComponent implements OnInit {

  constructor() {
    this.loadScript();
  }

  ngOnInit() {
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
      var dynamicScripts = ['assets/bower_components/select2/dist/js/select2.full.min.js', 'assets/custom/js/stock-entry.js'];

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
