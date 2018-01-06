import {Component} from 'react'

import * as sharedStyle from '../shared/style'
import styled from "styled-components"
import Navigator from '../components/Navigator'
import FooterContainer from '../containers/footer'
import ProductCard from '../components/ProductCard'
import Feature from '../components/Feature'

const Content = styled.div`
    font-size : 20px;
    padding : 5px 200px;
`

const P = styled.p`
    font-size: 16px;
    padding: 5px 0;
`

export default class extends Component{
    render(){
        return(
            <div>
            <Navigator/>
            <br/>
            <br/>
            <div class="container">
                <center>
                    <img width="80%" src="/static/banner1.jpg"/>
                </center>
                <sharedStyle.Heading>
                    วิธีการวัดขนาดตัวสำหรับลูกค้า
                </sharedStyle.Heading> 
                <Content>
                <P>เพราะความฝันของทุกคนเป็นสิ่งที่ล้ำค่าเสมอ และแม่อยากจะทำให้วันพิเศษของทุกคนกลายเป็นความทรงจำที่ล้ำค่ามากที่สุด วันนี้แม่จะมาบอกว่า นอกจากการออกแบบ สีและรูปทรงแล้ว การวัดขนาดของชุดก็สำคัญไม่แพ้กันนะจ๊ะ ดังนั้นแม่จึงจะมาบอกเคล็ดลับในการวัดขนาดตัว เพื่อเพิ่มความสะดวกในการค้นหาชุดที่จะเข้ามาเสริมความมั่นใจและเติมเต็มความฝันในทุก ๆ โอกาส ถ้าพร้อมแล้ว เรามาเริ่มกันที่ขั้นตอนแรกกันเลย</P>
                <P>1.เข้าใจวิธีการวัดขนาดตัว
    หลาย ๆ คนอาจจะคิดว่าการวัดขนาดตัวเป็นสิ่งที่ยุ่งยาก แต่เชื่อแม่เถอะ เพื่อความเป๊ะ! เราทนได้ โดยแม่จะมาบอกถึงสิ่งที่ทุกคนต้องรู้เวลาที่จะเลือกชุดที่เหมาะสมกับตัวเอง ได้แก่</P>
                <P>
                <img width = "100%"src="/static/size.jpg" />
                </P>
                <P>
                2.รู้เคล็ดลับในการเลือกชุด</P>
    <P>นอกจากนี้ยังมีเคล็ดลับเล็ก ๆ น้อย ๆ มาฝากทุกคนกันด้วยนะจ๊ะ ถ้าพร้อมแล้ว เรามาเริ่มกันเลย
                </P>
                <P>
                1. เพิ่มความเป๊ะของอกและสะโพกด้วยการวัดเฉพาะจุด
    สำหรับคนที่กังวลเรื่องขนาดของหน้าอกและสะโพก แม่จะบอกว่า การวัดเฉพาะจุดจะช่วยเพิ่มความกระชับและความพอดีของชุดได้มาก ๆ เลยนะจ๊ะ โดยแม่จะมาบอกสัดส่วนที่ทุกคนควรจะวัดเพิ่มเติม 
                </P>
                <P>
                2.รู้เคล็ดลับในการเลือกชุด
    นอกจากนี้ยังมีเคล็ดลับเล็ก ๆ น้อย ๆ มาฝากทุกคนกันด้วยนะจ๊ะ ถ้าพร้อมแล้ว เรามาเริ่มกันเลย</P>
<P>
เพิ่มความเป๊ะของอกและสะโพกด้วยการวัดเฉพาะจุด
    สำหรับคนที่กังวลเรื่องขนาดของหน้าอกและสะโพก แม่จะบอกว่า การวัดเฉพาะจุดจะช่วยเพิ่มความกระชับและความพอดีของชุดได้มาก ๆ เลยนะจ๊ะ โดยแม่จะมาบอกสัดส่วนที่ทุกคนควรจะวัดเพิ่มเติม 
</P>

<P>การวัดรอบอกบน (วัดจากเนินอกใต้รักแร้ทั้งสองข้าง)</P>
<P>
เพื่อความกระชับของชุด โดยเฉพาะชุดเกาะอก ไม่อย่างนั้นเดี๋ยวจะอึดอัดจนเกินไปนะ
การวัดรอบอกล่าง (วัดจากฐานอกหรือขอบล่างของเสื้อยกทรง)
เพื่อความกระชับของชุดที่มีขนาดพอดีตัวนะจ๊ะ
การวัดสะโพกบน (วัดรอบลำตัวในจุดที่ต่ำกว่าเอวประมาณ 15 ซม.)
ข้อนี้จำเป็นมาก (ก.ไก่ล้านตัว) แม่รู้นะว่าทุกคนมีน้องไขและน้องมันอยู่ที่หน้าท้อง แต่เวลานี้เราต้องเก็บน้อง ๆ เข้าไปก่อน เพราะเวลาที่เราสวมใส่เสื้อผ้าที่มีขนาดพอดี หน้าท้องเราจะได้เรียบเนียน ไม่มีเหล่าน้อง ๆ ไขและมันออกมาวิ่งเล่นกันนะจ๊ะ
การวัดสะโพกล่าง 
เราจะวัดส่วนนี้สำหรับชุดที่มีความกระชับเข้ารูปโดยเฉพาะส่วนสะโพก ชุดของใครที่เป็นกระโปรงยาวหรือกระโปรงบานก็ไม่ต้องนะจ๊ะ </P>
<P>
    2) ควรวัดขนาดรูปร่างของตัวเอง ทุก ๆ 1 - 3 เดือนนะจ๊ะ เผื่อเอาไว้ว่า ช่วงนั้นเรามีรูปร่างที่เปลี่ยนไปเนาะ<br/>

    3) การวัดชุดแฟนซี ควรจะวัดให้พอดีไปเลยนะ เพื่อความสวยงาม อุตส่าห์เป็นวันพิเศษทั้งที<br/>

    4) หากว่าผู้หญิงคนใด กังวลเรื่องการเปลี่ยนแปลงของรูปร่างจริง ๆ แม่ขอแนะนำชุดที่มีการเปิดหลัง หรือชุดรูปทรงสม็อคหลัง<br/>
</P><P>
เพียงแค่นี้เอง แม่บอกแล้วว่ามันง่ายจริง ๆ นะ แม่เชื่อว่า ตอนนี้เราก็น่าจะเตรียมตัวพร้อมแล้ว นึกถึงคำขอที่อยากจะได้ แล้วแม่จะทำฝันนั้นให้เป็นจริงเอง<br/>
</P>
<P>ด้วยรักจากแม่ทูนหัว
                </P>
                </Content>
                <sharedStyle.Heading>
                    Related Rentable
                </sharedStyle.Heading> 
                <div className="row">
                  <div className="col-md-3">
                    <ProductCard img="/static/product/w.jpg"/>
                  </div>
                  <div className="col-md-3">
                    <ProductCard img="/static/product/ww.jpg"/>
                  </div>
                  <div className="col-md-3">
                    <ProductCard img="/static/product/www.jpg"/>
                  </div>
                  <div className="col-md-3">
                    <ProductCard img="/static/product/wwww.jpg"/>
                  </div>
                </div>
            </div>
            <br /><br />
            <FooterContainer/>
            </div>  
        )
    }
}