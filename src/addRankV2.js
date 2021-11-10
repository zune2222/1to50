import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/database'
function addRankV2() {
    var rankCnt = firebase.database().ref('user/');
    let ary = new Array();
    rankCnt.on('value', (data) => {
        ary.push(data.val());
        ary.sort(function(a, b) {
            return a.time - b.time;
        });
    });
    return  (
        ary.map((data,index)=> (<div className="rankSt fnt" key={index}>{data.name} {data.time}</div>))
    )
}

export default addRankV2;