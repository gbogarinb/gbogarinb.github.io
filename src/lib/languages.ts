interface Task {
  question: string,
  answer: string,
}

interface Language {
  lang: string,
  title1: string,
  title2: string,
  description1: string,
  description2: string,
  soWhatCanIDoForYou: string,
  letsGetInTouch: string,
  name: string,
  subject: string,
  iNeedSomething: string,
  message: string,
  sendEmail: string,
  tasks: Task[],
}

let english: Language = {
  lang: "en",
  title1: "Hey,",
  title2: "I'm Gustavo",
  description1: "— a software developer with more than a decade of experience",
  description2: ", ready to help you.",
  soWhatCanIDoForYou: "So what can I do for you?",
  letsGetInTouch: "Let's get in touch",
  name: "Name",
  subject: "Subject",
  iNeedSomething: "I need something",
  message: "Message",
  sendEmail: "Send email",
  tasks: [
    {
      question: "Need a RESTful API?",
      answer: "...I can do that"
    },
    {
      question: "Need an App?",
      answer: "I can do that too!"
    },
    {
      question: "Need a developer account?",
      answer: "In a second!"
    }
,
    {
      question: "Need help with AWS?",
      answer: "That's my daily job!"
    }
,
    {
      question: "Need something else?",
      answer: "Just let me know in the form below!"
    }
  ]
}
let spanish: Language = {
  lang: "es",
  title1: "Hola,",
  title2: "Soy Gustavo",
  description1: "— un desarrollador de software con más de una década de experienca",
  description2: ", listo para ayudarte.",
  soWhatCanIDoForYou: "¿Qué puedo hacer por ti?",
  letsGetInTouch: "Pongámonos en contacto",
  name: "Nombre",
  subject: "Asunto",
  iNeedSomething: "Necesito algo",
  message: "Mensaje",
  sendEmail: "Enviar correo",
  tasks: [
    {
      question: "¿Necesitas una RESTful API?",
      answer: "...Yo puedo hacer eso"
    },
    {
      question: "¿Necesitas una App?",
      answer: "¡También puedo hacerlo!"
    },
    {
      question: "¿Necesitas una cuenta de desarrollo?",
      answer: "¡En un segundo!"
    }
,
    {
      question: "¿Necesitas ayuda con AWS?",
      answer: "¡Es mi trabajo de todos los días!"
    }
,
    {
      question: "¿Necesitas algo diferente?",
      answer: "¡Escríbeme en el formulario de abajo!"
    }
  ]
}
export let languages: Language[] = [english, spanish];
