import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { File } from '@ionic-native/file'
import { Platform } from 'ionic-angular/platform/platform';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { PhotoViewer } from '@ionic-native/photo-viewer';
/**
 * Generated class for the LivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livro',
  templateUrl: 'livro.html',
})
export class LivroPage {

  livro;

  constructor(public navCtrl: NavController, public navParams: NavParams, private videoPlayer: VideoPlayer,
    private camera: Camera, private streamingMedia: StreamingMedia, private youtube: YoutubeVideoPlayer,
    private file: File, private platform: Platform, private photoViewer: PhotoViewer) {
    console.log(navParams.data);
    this.livro = navParams.data

  }

  


  ionViewDidLoad() {
    console.log('ionViewDidLoad LivroPage');
    console.log(this.livro.titulo)
  }

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  livro1(){
    console.log(this.platform.is("cordova"));
    
    console.log(this.file.applicationDirectory)
    console.log(this.file.externalApplicationStorageDirectory)

   let options: VideoOptions = {
     volume: 0.5
     
    }

    /*var path = this.file.applicationDirectory + 'www/assets/videos/laranja-mecanica.png';
    console.log(path);

     //http://www.sample-videos.com/
    this.streamingMedia.playVideo(path, options);*/

    this.videoPlayer.play("file:///android_asset/www/assets/imgs/poutrona.mp4",options).then(() => {
      console.log('video completed');
      }).catch(err => {
      console.log(err);
      });    
  }

  livro2(){
    console.log(this.platform.is("cordova"));
    
    console.log(this.file.applicationDirectory)
    console.log(this.file.externalApplicationStorageDirectory)

   let options: VideoOptions = {
     volume: 0.5
     
    }

    /*var path = this.file.applicationDirectory + 'www/assets/videos/laranja-mecanica.png';
    console.log(path);

     //http://www.sample-videos.com/
    this.streamingMedia.playVideo(path, options);*/

    this.videoPlayer.play("file:///android_asset/www/assets/imgs/Montanhas.mp4",options).then(() => {
      console.log('video completed');
      }).catch(err => {
      console.log(err);
      });    
  }

  image1(){
    var options = {
      share: true, // default is false
      closeButton: false, // default is true
      copyToReference: true // default is false
  };
  this.photoViewer.show('file:///android_asset/www/assets/imgs/a.jpg', 'Optional Title', options);
  }

}
