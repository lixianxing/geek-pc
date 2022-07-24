import * as echarts from 'echarts';
import { useEffect, useRef } from 'react'

function echartInit(node, data, title) {
  const myChart = echarts.init(node);

  myChart.setOption({
    title: {
      text: title
    },
    tooltip: {},
    xAxis: {
      data: []
    },
    yAxis: {},
    series: [
      {
        type: "pie",
        data: data
      }
    ]
  })
}


function Pie({ style, data, title}) {
  const nodeRef = useRef(null)
  useEffect(() => {
    echartInit(nodeRef.current, data, title)
  }, [data, title])

  return (
    <div ref={nodeRef} style={style}></div>
  )
}

export default Pie