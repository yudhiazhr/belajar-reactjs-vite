import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const linkRef = useRef(null)
  const goto = (ref) => {
    scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
    {/* Ketika mengklik logo vite akan scroll ke bawah ke logo react ini adalah kegunaan dari useRef */}
      <div onClick={() => goto(linkRef.current)}>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        {/* <a href="https://vitejs.dev" target="_blank">
          
        </a> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis illo ipsum at! Ratione impedit autem eos velit odio harum at excepturi. Rerum ea explicabo dignissimos placeat blanditiis facere, eaque, beatae illo deserunt modi numquam velit. Hic tempore corporis enim fuga nostrum veritatis dignissimos explicabo nobis, nihil, ipsam quam laborum fugit recusandae sit blanditiis laboriosam. Voluptatum reiciendis soluta est unde facere officiis in. Velit iusto totam eligendi accusamus facilis, maxime deleniti sequi explicabo? Dicta praesentium, obcaecati, placeat distinctio ducimus ipsam quasi fugiat laboriosam culpa aliquam inventore atque quibusdam ipsa maiores ipsum. Iste, reiciendis iusto enim non a molestias officiis temporibus optio vitae accusamus delectus vel veniam, aliquam, expedita voluptate fuga quisquam. Totam, dicta corrupti? Suscipit, quibusdam, eveniet nobis quos maiores magnam eligendi nostrum esse sint tenetur et rem sit commodi soluta fugit, corporis explicabo iste dignissimos blanditiis. Praesentium dolore iusto est quaerat sequi nulla asperiores eius voluptatibus magni culpa cum ad necessitatibus maxime laboriosam, eligendi facilis sint dolor sed nam vel aliquid alias consequuntur perferendis! Ratione eius fuga totam nobis consequatur consequuntur numquam adipisci dolores necessitatibus laudantium, minus alias possimus aperiam veniam, quos voluptatem quisquam incidunt nihil nulla optio! Perferendis ipsam possimus temporibus et culpa, nesciunt veniam nam maiores dolores. Iste?</p>
      <br></br>
      <br></br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, accusamus voluptate quibusdam nostrum at quo maiores ratione libero, repudiandae, voluptatem reprehenderit tempora dolorum blanditiis fuga corporis. Labore, possimus eius nulla placeat error quas officiis praesentium, obcaecati, ipsa ea accusamus eum culpa nobis ut ducimus nam impedit iste repellat esse? Et!</p>
      <a href="https://react.dev" target="_blank" ref={linkRef}>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <br></br>
      <br></br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, accusamus voluptate quibusdam nostrum at quo maiores ratione libero, repudiandae, voluptatem reprehenderit tempora dolorum blanditiis fuga corporis. Labore, possimus eius nulla placeat error quas officiis praesentium, obcaecati, ipsa ea accusamus eum culpa nobis ut ducimus nam impedit iste repellat esse? Et!</p>
      <br></br>
      <br></br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, accusamus voluptate quibusdam nostrum at quo maiores ratione libero, repudiandae, voluptatem reprehenderit tempora dolorum blanditiis fuga corporis. Labore, possimus eius nulla placeat error quas officiis praesentium, obcaecati, ipsa ea accusamus eum culpa nobis ut ducimus nam impedit iste repellat esse? Et!</p>
      
    </>
  )
}

export default App
