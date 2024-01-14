import { useState } from 'react'
import { Link } from 'react-router-dom'

// Assests
import contact from '../../assets/illustrator/contact.svg'

export default function Contact() {
  const [nameLabel, setNameLabel] = useState(false)
  const [emailLabel, setEmailLabel] = useState(false)
  const [messageLabel, setMessageLabel] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [msg, setMsg] = useState({type: '', text: ''})

  const handleLabel = (val, labelName, setFun) => {
    if(val.trim().length > 0) return
    setFun(!labelName)
  }

  const handleEmail = e => {
    e.preventDefault()
    
    if(name.length < 4) {
      setMsg({type: 'err', text: 'Name must be more 4 character.'})
      return
    } else {
      setMsg({type: '', text: ''})
    }
    if(email.length < 8) {
      setMsg({type: 'err', text: 'Please enter a valid email.'})
      return
    } else {
      setMsg({type: '', text: ''})
    } 
    if(message.length < 8) {
      setMsg({type: 'err', text: 'Message must be 8 character.'})
      return
    } else {
      setMsg({type: '', text: ''})
    } 


    fetch('/contact', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, message})
    })
    .then(res => res.json())
    .then(res => {
      setName('')
      setEmail('')
      setMessage('')
      setMsg({type: 'succ', text: 'Message sent!'})

      setTimeout(() => {
        setMsg({type: '', text: ''})
      }, 2000);
    })
  }
  
  return (
    <div className='px-4'>
      <div className='relative text-4xl min-h-screen min-w-full flex items-center justify-center flex-col sm:text-6xl font-bold tracking-wider text-gray-100'>
        <div className="absolute sm:w-76 w-64 sm:h-76 h-64 opacity-30 blur-3xl rounded-full bg-yellow-500"></div>
        <div className="relative w-1/2 max-sm:w-full">
          <img className='object-cover' src={contact} alt="developer" />
        </div>
      </div>
      <div className="px-4 flex justify-center sm:flex-row flex-col sm:w-full lg:w-3/4 mx-auto sm:gap-8">
        <div className='my-8 text-2xl flex items-center justify-center sm:flex-col flex-row gap-6'>
          <Link to='https://instagram.com/abhii.js' target='_blank' className='relative w-12 h-12 grid place-items-center bg-gradient-to-tl from-teal-500 to-pink-300 text-gray-100 hover:scale-110 transition-all rounded-full'>
            <div className="absolute w-full h-full blur-md opacity-60 bg-pink-500 rounded-full"></div>
            <i className="fa-brands fa-instagram relative"></i>
          </Link>
          <Link to='https://x.com/abhiijs' target='_blank' className='relative w-12 h-12 grid place-items-center bg-gradient-to-tl from-teal-500 to-pink-300 text-gray-100 hover:scale-110 transition-all rounded-full'>
            <div className="absolute w-full h-full blur-md opacity-60 bg-pink-500 rounded-full"></div>
            <i className="fa-brands fa-x-twitter relative"></i>
          </Link>
          <Link to='https://linkedin.com/in/AbhiMehrr' target='_blank' className='relative w-12 h-12 grid place-items-center bg-gradient-to-tl from-teal-500 to-pink-300 text-gray-100 hover:scale-110 transition-all rounded-full'>
            <div className="absolute w-full h-full blur-md opacity-60 bg-pink-500 rounded-full"></div>
            <i className="fa-brands fa-linkedin-in relative"></i>
          </Link>
          <Link to='https://github.com/abhimehrr' target='_blank' className='relative w-12 h-12 grid place-items-center bg-gradient-to-tl from-teal-500 to-pink-300 text-gray-100 hover:scale-110 transition-all rounded-full'>
            <div className="absolute w-full h-full blur-md opacity-60 bg-pink-500 rounded-full"></div>
            <i className="fa-brands fa-github relative"></i>
          </Link>
          <Link to='mailto:hloo.abhi@gmail.com' target='_blank' className='relative w-12 h-12 grid place-items-center bg-gradient-to-tl from-teal-500 to-pink-300 text-gray-100 hover:scale-110 transition-all rounded-full'>
            <div className="absolute w-full h-full blur-md opacity-60 bg-pink-500 rounded-full"></div>
            <i className="fa-solid fa-at relative"></i>
          </Link>
        </div>

        <div className='relative sm:my-8 p-1 w-full bg-purple-400 overflow-hiddens rounded-lg'>
          <div className="absolute w-full h-full blur opacity-50 bg-pink-500 rounded-lg"></div>
          <div className="relative p-6 w-full h-full bg-slate-900 rounded-lg">
            <p className="text-gray-200 text-xl mb-10">
              Anything in mind? Just drop a <span className='text-purple-500 font-bold'>message.</span>
            </p>
            <form onSubmit={handleEmail} className="space-y-12s">
              <div className="w-full flex justify-between items-center flex-col sm:flex-row gap-2 space-x-2s">
                <div className="relative sm:w-1/2 w-full">
                  <label htmlFor="name" className={`text-gray-200 text-xl absolute top-0.5 ${nameLabel && '-translate-y-8 -translate-x-1 font-medium'} ml-2 transition delay-100 cursor-text`}>Name</label>
                  <input onBlur={()=>handleLabel(name, nameLabel, setNameLabel)} onFocus={()=>handleLabel(name, nameLabel, setNameLabel)} onChange={e=>setName(e.target.value)} type="text" name="name" id="name" className="w-full bg-slate-800 focus:bg-gray-200 focus:text-black text-gray-200 border-none outline-none px-2 py-1 text-xl transition-all rounded" />
                </div>
                <div className="relative sm:w-1/2 sm:mt-0 mt-8 w-full">
                  <label htmlFor="email" className={`text-gray-200 text-xl absolute top-0.5 ${emailLabel && '-translate-y-8 -translate-x-1 font-medium'} ml-2 transition delay-100 cursor-text`}>Email</label>
                  <input onBlur={()=>handleLabel(email, emailLabel, setEmailLabel)} onFocus={()=>handleLabel(email, emailLabel, setEmailLabel)} onChange={e=>setEmail(e.target.value)} type="email" name="email" id="email" className="w-full bg-slate-800 focus:bg-gray-200 focus:text-black text-gray-200 border-none outline-none px-2 py-1 text-xl transition-all rounded" />
                </div>
              </div>
              <div className="relative w-full mt-12">
                <label htmlFor="message" className={`text-gray-200 text-xl absolute top-0.5 ml-2 ${messageLabel && '-translate-y-9 -translate-x-1 font-medium'} transition delay-100 cursor-text`}>Message</label>
                <textarea onBlur={()=>handleLabel(message, messageLabel, setMessageLabel)} onFocus={()=>handleLabel(message, messageLabel, setMessageLabel)} onChange={e=>setMessage(e.target.value)} name="message" id="message" className='w-full h-24 resize-none bg-slate-800 focus:bg-gray-200 focus:text-black text-gray-200 border-none outline-none px-2 py-1 text-xl transition-all rounded'></textarea>
              </div>
              <div className="relative w-full flex justify-end">
                <div className={`absolute ${msg.type === 'err' ? 'text-red-400' : 'text-teal-500'} text-sm w-full`}>
                  {msg.text}
                </div>
                <button type="submit" className='group bg-pink-600 text-white hover:bg-pink-500 mt-6 py-2 px-8 flex items-center justify-center gap-3 font-medium text-xl transition-all rounded'>
                  Send
                  <i className="fa-solid fa-paper-plane group-hover:translate-x-6 group-hover:-translate-y-16 transition delay-100"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}