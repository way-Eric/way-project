<template>
  <div>
    <div class="amap-page-container">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :plugin="plugin">
        <el-amap-info-window  :position="mywindow.position" :content="mywindow.content" :visible="mywindow.visible" :events="mywindow.events"></el-amap-info-window>
        <el-amap-marker :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
        <el-amap-circle :center="circle.center" :radius="circle.radius" :fillOpacity="circle.fillOpacity" :events="circle.events" :strokeColor="circle.strokeColor" :strokeStyle="circle.strokeStyle" :fillColor="circle.fillColor"></el-amap-circle>

      </el-amap>
    </div>
  </div>
</template>

<style>
  .amap-page-container {
    height: 800px;
  }
  h4 {
    font-size: .4rem;
    color: #00bcd4;
  }
  .item {
    margin-left: .05rem;
    color: #333;
    font-size: .3rem
  }
</style>


<script>
export default {
  data () {
    return {
      zoom: 15,
      center: [109.34271812438965, 18.293090640590097],
      circle: {
        clickable: true,
        center: [109.34271812438965, 18.293090640590097],
        radius: 200,
        fillOpacity: 0.3,
        strokeStyle: 'dashed',
        fillColor: '#FFFF00',
        strokeColor: '#00BFFF'
      },
      marker: {
        position: [109.34271812438965, 18.293090640590097],
        events: {
          click: () => {
            if (this.mywindow.visible === true) {
              this.mywindow.visible = false
            } else {
              this.mywindow.visible = true
            }
          },
          dragend: (e) => {
            this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
          }
        },
        visible: true,
        draggable: false
      },
      mywindow: {
        position: [109.34271812438965, 18.293090640590097],
        content: '<h4>天涯海角:</h4><div class="text item">咫尺天涯</div><div class="text item">终身难望</div>',
        visible: true,
        events: {
          close () {
            this.mywindow.visible = false
          }
        }
      },
      plugin: {
        pName: 'Scale',
        events: {
          init (instance) {
            console.log(instance)
          }
        }
      }
    }
  }
}
</script>