import React from "react"


function EditAlert(props) {
return <div>
<p>edit alert form goes here </p>
<button>Save changes </button>
<button onClick={props.handleCancel}>cancel</button>
</div>
}
export default EditAlert