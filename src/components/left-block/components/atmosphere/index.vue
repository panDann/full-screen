
<template>
     <div class="atmosphere font14 white" >
      <div class="top">
        <span>{{atmosphereMsg.date}}</span>
        <span class="day">{{atmosphereMsg.week}}</span>
        <span>{{atmosphereMsg.date_lunar}}</span>
          </div>
      <div class="flex-row middle">
        <i class="icon-tianqi1 iconfont font32" />
        <div class="bar"></div>
        <div class="flex-row">
          <span class="font32 real-degree">{{atmosphereMsg.tem}}</span>
          <div class="font14">
            <div>&#8451;</div>
            <div>{{atmosphereMsg.wea}}(实时)</div>
          </div>
        </div>
      </div>
      <div class="range">{{atmosphereMsg.tem2}}~{{atmosphereMsg.tem1}}&#8451;</div>
      <div class="bottom">{{atmosphereMsg.wea}}<span class="paddinglr1rem">  | </span> {{atmosphereMsg.win+''+atmosphereMsg.win_speed}}<span class="air-quality" :class="matchAirLevelStyle(atmosphereMsg.air_level)">{{atmosphereMsg.air_level}}</span> </div>
    </div>
</template>

<script>

export default {

  props: {
    atmosphereMsg: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    matchAirLevelStyle (value) {
      switch (value) {
        case '优':return 'success-bg'
        default :return 'grey-bg'
      }
    }
  }

  // render(h){
  //     return
  // }
}
</script>

<style lang='stylus' scoped>
.atmosphere
        position absolute
        top: 5%
        right -350px
        width:300px;
        height:170px;
        padding: $primaryPadding 1.5rem
        background-size: contain
        background: no-repeat
        background-image: url('~@src/assets/atmosphere.png')
        .top
            line-height: 24px
            .day
                padding: 0 1rem
        .middle
            height: 56px;
            margin: 10px 0;
            .bar
                width:1px;
                height:20px;
                background: #999999
                margin: 0 1rem
            .real-degree
                padding-right: .5rem
                align-self start
                color $warning
        .range
            margin-left: 70px
        .bottom
            line-height:  36px;
        .air-quality
            margin-left 1rem
            padding: 0.1rem 1rem;
            border-radius: 4px;
.success-bg
   background $success
.grey-bg
   background #999
</style>
