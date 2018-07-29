import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DesejosPage } from '../pages/desejos/desejos';
import { LivrariaPage } from '../pages/livraria/livraria';
import { LivroPage } from '../pages/livro/livro';
import { Camera } from '@ionic-native/camera';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { File } from '@ionic-native/file'
import { PhotoViewer } from '@ionic-native/photo-viewer';


@NgModule({
  declarations: [
    MyApp,
    DesejosPage,
    HomePage,
    LivrariaPage,
    TabsPage,
    LivroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DesejosPage,
    HomePage,
    LivrariaPage,
    TabsPage,
    LivroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideoPlayer,
    Camera,
    StreamingMedia,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    PhotoViewer
  ]
})
export class AppModule {}
