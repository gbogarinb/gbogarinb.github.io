interface Task {
  text: string,
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
  soWhatCanIDoForYou: "This is what I can do",
  letsGetInTouch: "Let's get in touch",
  name: "Name",
  subject: "Subject",
  iNeedSomething: "I need something",
  message: "Message",
  sendEmail: "Send email",
  tasks: [
    {
      text: "Build a RESTful API",
    },
    {
      text: "Apps for Android and iOS",
    },
    {
      text: "Service integrations (Firebase, Facebook, etc.)",
    }
,
    {
      text: "Cloud services setup",
    }
,
    {
      text: "Anything else you may need for your business",
    }
  ]
}
let spanish: Language = {
  lang: "es",
  title1: "Hola,",
  title2: "Soy Gustavo",
  description1: "— un desarrollador de software con más de una década de experienca",
  description2: ", listo para ayudarte.",
  soWhatCanIDoForYou: "Esto es lo que puedo hacer",
  letsGetInTouch: "Pongámonos en contacto",
  name: "Nombre",
  subject: "Asunto",
  iNeedSomething: "Necesito algo",
  message: "Mensaje",
  sendEmail: "Enviar correo",
  tasks: [
    {
      text: "Construir una API RESTful",
    },
    {
      text: "Aplicaciones para Android e iOS",
    },
    {
      text: "Integraciones de servicios (Firebase, Facebook, etc.)",
    },
    {
      text: "Configuración de servicios en la nube",
    },
    {
      text: "Cualquier otra cosa que pueda necesitar para su negocio",
    }
]

}
export let languages: Language[] = [english, spanish];
