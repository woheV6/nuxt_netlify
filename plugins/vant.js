import vant from 'vant'
import vue from 'vue'
vue.use(vant)
module.exports={
  css:[{src:'vant/lib/index.css'}],
  plugins:[
    {src: '~plugins/vant.js'}
  ]
}
