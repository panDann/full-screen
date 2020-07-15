
const axisConfig = {
  splitLine: {
    show: true,
    lineStyle: {
      type: 'dashed'
    }
  },
  axisLine: {
    lineStyle: {
      color: 'white',
      type: 'dashed'
    }

  },
  axisLabel: {
    color: 'white'
  }
}
export const createOption = (data) => {
  return {
    tooltip: {
      trigger: 'axis'
    },
    color: ['#20E5F1', '#FF665F'],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      ...axisConfig,
      data: data.xAxisData
      //  ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value',
      name: '万人',
      ...axisConfig
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        symbolSize: 10,
        data: data.yAxisData[0]
        //  [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        symbolSize: 10,
        data: data.yAxisData[0]
        // data: [220, 182, 191, 234, 290, 330, 310]
      }
    ]
  }
}
