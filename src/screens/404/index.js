// Copy from https://codepen.io/juliepark/pen/erOoeZ
import { useNavigate } from 'react-router-dom'
import './index.css'

export default function NotFound() {
  let navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className='notfound-container'>
        <div className='notfound-body'>
          <div id="background"></div>
          <div class="top">
            <h1>404</h1>
            <h3>page not found</h3>
          </div>
          <div class="container">
            <div class="ghost-copy">
              <div class="one"></div>
              <div class="two"></div>
              <div class="three"></div>
              <div class="four"></div>
            </div>
            <div class="ghost">
              <div class="face">
                <div class="eye"></div>
                <div class="eye-right"></div>
                <div class="mouth"></div>
              </div>
            </div>
            <div class="shadow"></div>
          </div>
          <div class="bottom">
            <div class="buttons">
              <button class="btn" onClick={() => { navigate(-1) }}>Back</button>
              <button class="btn" onClick={() => { navigate("/") }}>Home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
