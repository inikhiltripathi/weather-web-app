import Foggy from '../assets/foggy.jpg';
import Sunny from '../assets/sunny.jpg';
import Cloudy from '../assets/cloudy.jpg';
import Rain from '../assets/rain.jpg';
import Snow from '../assets/snow.jpg';
import Thunder from '../assets/thunder.jpg';

const BgPicker = (value) => {

    var url = "";
    var code = Number(value);

    if(code>1002 && code<1010){
        url = Cloudy;
    }else if( code===1030 || (code >1134 && code<1148)){
        url= Foggy;
    }else if((code>1062 && code<1088 ) || (code>1149 && code<1208) || (code>1239 && code<1253)){
        url=Rain;
    }else if((code>1113 && code<1118) || (code>1209 && code<1238) || (code>1254 && code<1265)){
        url=Snow;
    }else if(code>1272){
        url=Thunder;
    }else{
        url=Sunny;
    }

    return url;
};

export default BgPicker;