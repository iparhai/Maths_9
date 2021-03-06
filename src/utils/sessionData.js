
import $ from "min-jquery";
import urlParams from "./getURLParams";
const queryParams = new URLSearchParams(window.location.search);
let index = 0
let data = []
const setData = (problem, attemptedAnswer, corectAnswer) => {
    data.push({ index: index, problem: problem, attemptedAnswer: attemptedAnswer, corectAnswer: corectAnswer, timeTaken: null })
}
const setDataTime = (timeTaken) => {
    data[index].timeTaken = timeTaken
    sendData()
    index += 1
    //console.log(data)
}
const sendData = () => {
    console.log(data[index])
    const tkn = "f6083658c798db3c3c3227aa5a813c601da7c196fb0871feb0e23bc2528ca35a9253ef957e37d1d7a25e4360a12652ba5493963207def560cd9cab32db8fe0db6602bc278fcfc5be790fb520811d59236734c52e8e25b8dabdece79b16e1815a15bffd16ef0c5e1d46aa9571d6d687d304724f71aa1b06f929ca2b4da5d5add11efa614b69f83ad544bbf2b41c0afe4689c6457f99006d5943affd31ea6f49d3"
    const values = ""
    let st = 0
    if (data[index].attemptedAnswer == data[index].corectAnswer) {
        st = 1
    }
    const limit = urlParams.limit
    const dif = urlParams.dif
    const cid = urlParams.cid
    const crcid = urlParams.crcid
    const sid = urlParams.sid
    const uid = urlParams.uid
    const id = urlParams.id
    const type = urlParams.type
    $.ajax({
        url: "https://nano-softs.com/adaptive/api.php?prb=" + data[index].problem + "&aa=" + data[index].attemptedAnswer + "&ca=" + data[index].corectAnswer + "&tt=" + data[index].timeTaken + "&st=" + st + "&tkn=" + tkn + "&limit=" + limit + "&cid=" + cid + "&crcid=" + crcid + "&sid=" + sid + "&dif=" + dif + "&uid=" + uid + "&id=" + id + "&type=" + type + "&gt=a",
        type: "post",
        data: values,
        success: function (data) {
            console.log(data)
            alert("hit")
        },
        error: function (data) {
            //alert(data);
        }
    });
}
export default {
    setData,
    setDataTime,
    sendData,
}


