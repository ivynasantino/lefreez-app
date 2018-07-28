import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
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
    private camera: Camera, private streamingMedia: StreamingMedia, private youtube: YoutubeVideoPlayer) {
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

  print(){

    this.youtube.openVideo('https://www.youtube.com/watch?v=rmeTj9gTbNo&t=2s');

    /*let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    };
 
    // http://www.sample-videos.com/
    this.streamingMedia.playVideo('file://android_asset/www/assets/videos/poutrona.mp4', options);*/

    //this.camera.getPicture(this.options).then((imageData) => {
     /* // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });*/
  }

}
