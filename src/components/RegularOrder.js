import {React, useState} from 'react'

function RegularOrder(props) {
    return (
        <div className="orderForms">
            <div className="cakeImage">
                <div className="selectImg">
                    <img src={props.cakeImg} alt="selected Img" />
                </div>
                <button >Customize</button>
            </div>
            <form noValidate>
                <input type='number' placeholder='weight' />
                <select id='egg'>
                    <option value="withEgg">With Egg</option>
                    <option value="withoutEgg">Without Egg</option>
                </select>

                <br/>
                
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="email" />
                <input type="number" readOnly placeholder='500' />
                <button type="button">Submit</button>
            </form>
        </div>
  )
}

export default RegularOrder