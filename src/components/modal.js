import { useState } from "react"

const ModalImage = ({ clickModal, children,statusPopup }) => {
    const [popUp,setPopup] = useState(statusPopup)
    return (
        <div onClick={clickModal} className="modal-popup">
            {children}
        </div>
    )
}
export default ModalImage