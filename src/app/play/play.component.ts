import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, Inject, Injectable } from '@angular/core';
// Dynamics
import { AdDirective } from '../ad.directive';
import { AdItem }      from '../ad-item';
import { AdComponent } from '../ad.component';
// Utils
import { getSessionStorage } from '../services/utils';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

@Injectable()
export class PlayComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  userLogged: boolean = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    if (getSessionStorage('user')) {
      this.userLogged = true;
      this.loadComponent('home');
    } else {
      this.loadComponent('login');
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent(pages) {

    let adItem;
    let componentFactory;
    let viewContainerRef;
    let componentRef;

    switch (pages) {
      case 'login':
        adItem = this.ads[0];

        componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        console.log(this.ads);

        viewContainerRef = this.adHost.viewContainerRef; 
        viewContainerRef.clear();

        componentRef = viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = adItem.data;
        break;
      case 'signup':
        adItem = this.ads[1];
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        componentRef = viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = adItem.data;
        break;
      case 'home':
        adItem = this.ads[2];
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        componentRef = viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = adItem.data;
        break;
      case 'playlist':
        adItem = this.ads[4];
        console.log(adItem);
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        
        componentRef = viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = adItem.data;
        break;
    }

    // let componentRef = viewContainerRef.createComponent(componentFactory);
    // (<AdComponent>componentRef.instance).data = adItem.data;
  }

}