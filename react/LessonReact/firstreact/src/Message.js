
function Message(props) {
    return (
      <div >
        <p style={{color:'red',backgroundColor: '#282c34' }}>You are {props.text}
        </p>
        
      </div>
    );
  }
  
  export default Message;