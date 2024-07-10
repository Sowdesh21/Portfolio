import React from 'react' 
import emailjs from'@emailjs/browser';

const Emal = () => {

    const [name, setName] = useState('');
    const [email, setEmail] =useStste('');
    const [message, setMessage] =useStste('');

    const handleSubmit = (e) => {
        e.preventDefault();
         
        const serviceId= "service_s3qpl5j";
        const templateId = "template_kct7876";
        const publicKey = "U5ic_dUt4PvMbMU_0";
    }

    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'sowdesh-eternity',
        message: message,
    };

    }

    emailjs.send(serviceId , templateId, templateParams, publicKey)
    .then((response) => {
        console.log('Email sent succesfully', response);
        setName('');
        setEmail('');
        setMessage('');
    })
    .catch((error) => {
        console.error('Error sending email:' ,error);
    });

    return (
        <form onSubmit = {handleSubmit} className='emailform'>
            <input 
            type="text"
            placeHolder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="email"
            placeHolder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            >

            </textarea>
            <button type="submit">send email</button>
            </form>
    )

export default Email