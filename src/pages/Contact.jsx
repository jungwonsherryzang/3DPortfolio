import { useState, useRef, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import useAlert from '../hooks/useAlert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email:'', message: '' });
  const [isLoading, setisLoading] = useState(false); //loading state
  const [currentAnimation, setcurrentAnimation] = useState('idle');
  const { alert, showAlert, hideAlert } = useAlert(); //when to alert something

  //three functions
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name] : e.target.value });  //update all properties from our form
  }

  const handleFocus = () => setcurrentAnimation('walk');  //once click out
  const handleBlur = () => setcurrentAnimation('idle'); //submit function
  
  const handleSubmit = (e) => {
    e.preventDefault(); //to not reload page after submit
    setisLoading(true);
    setcurrentAnimation('hit');

    //setting a basic form to submit
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form,name,
        to_name: "Jungwon",
        from_email: form.email,
        to_email: 'aviationlover.sherry@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setisLoading(false);
      showAlert({ show: true, text: 'Message sent successfully!', type: 'success' }); //show success message
      //hide an alert

      //after some time, stop the fox and clear everything
      setTimeout(() => {
        hideAlert(); 
        setcurrentAnimation('idle');
        setForm({ name: '', email: '', message: '' });
      }, [3000]);

    }).catch((error) => {
      setisLoading(false);
      setcurrentAnimation('idle');
      showAlert({ show: true, text: 'I did not receive your message!', type: 'danger' }); //show failed message
    })

  };


  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      { alert.show && <Alert {...alert} /> }

      <div className="flex-1 min-w-[50%] flex flex-col">
      <h1 className="head-text">Get In Touch</h1>

      <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit} >
        <label className="text-black-500 font-semibold">
          Name
          <input type="text" name="name" className="input" placeholder="John" required value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
        </label>

        <label className="text-black-500 font-semibold">
          Email
          <input type="email" name="email" className="input" placeholder="John@gmail.com" required value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
        </label>

        <label className="text-black-500 font-semibold">
          Your Message
          <textarea name="message" rows={4} className="input" placeholder="Let me know how I can help you!" required value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
        </label>

        <button type="submit" className="btn" disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur}>
          {isLoading ? 'Sending...' : 'Send Message' }
        </button>
      </form>
      </div>

      {/* displaying a fox */}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox currentAnimation={currentAnimation} position={[0.5, 0.35, 0]} rotation={[12.6, -0.6, 0]} scale={[0.5, 0.5, 0.5]} />
          </Suspense>
        </Canvas>

      </div>
    </section>
  )
}

export default Contact;