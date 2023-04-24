const Navbar = ({ streamContent, currentItem, setCurrentItem }) => {
    var uniqueStream = [];
    for(let i = 0; i< streamContent.length; i++){    
        if(uniqueStream.indexOf(streamContent[i].stream) === -1){
            if(![streamContent[i].stream].toString().includes(','))
            uniqueStream.push(streamContent[i].stream);        
        }        
    }
    return (
      <div className="btn-container">
        {uniqueStream.map((item, index) => {
            console.log(item)
          return (
            <button
              key={item.id}
              onClick={() => setCurrentItem(item)}
              className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
            >
              {item.stream}
            </button>
          )
        })}
      </div>
    )
  }
  
  export default Navbar
  