

function App() {
  return (
    <nav>
      <div className="logo">
        <div className='dropdown'>hello
        {/* <h3 className='dropdown-content'>Logo</h3> */}
        </div>
        <h3 className='dropdown-content'>Logo</h3>
        <input type="text" />
      </div>
      <div className="products">
        <ul>
          <li>
            <a href="#">about us</a>
          </li>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <a href="#">products</a>
          </li>
        </ul>
      </div>
      <div className="signin">
        <button>sign in</button>
      </div>

    </nav>
  );
}

export default App;
