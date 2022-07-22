import Bar from "@/components/Bar"
import Pie from "@/components/pie"

const Home = () => {
  return (
    <div className="home">
      <Bar
        style={{ width: '500px', height: '400px' }}
        xData={['vue', 'angular', 'react']}
        sData={[50, 60, 70]}
        title='三大框架满意度' />

      <Pie
        style={{ width: '500px', height: '400px' }}
        data={[{name:"aad", value: 12},{name:"dsa", value: 5}]}
        title='三大框架满意度'
        />
    </div>
  )
}
export default Home