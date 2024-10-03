const list = [
    {
        "id" : 1,
        "name" : "Javascript",
        "langname" : "javascript",
        "desc" : "JavaScript é uma linguagem de programação utilizada para desenvolvimento web. Ela permite criar páginas interativas e dinâmicas, sendo suportada por todos os navegadores. Com o crescimento de frameworks como React e Vue.js, JavaScript se tornou fundamental para aplicações front-end modernas."
    },
    {
        "id" : 2,
        "name" : "C#",
        "langname" : "csharp",
        "desc" : "C# é uma linguagem desenvolvida pela Microsoft, parte da plataforma .NET. É amplamente usada para o desenvolvimento de aplicativos de desktop, web e jogos (com Unity). C# combina a simplicidade de sintaxe com poderosas funcionalidades, oferecendo suporte a programação orientada a objetos."
    },
    {
        "id" : 3,
        "name" : "Kotlin",
        "langname" : "kotlin",
        "desc" : "Kotlin é uma linguagem moderna que se tornou a principal escolha para o desenvolvimento de aplicativos Android. Ela é totalmente interoperável com Java, trazendo concisão e segurança de tipos, além de recursos avançados como extensão de funções e programação funcional."
    },
    {
        "id" : 4,
        "name" : "Java",
        "langname" : "java",
        "desc" : "Java é uma das linguagens mais populares e versáteis, conhecida por seu princípio escreva uma vez, execute em qualquer lugar. É amplamente utilizada em desenvolvimento de aplicativos corporativos, Android e sistemas embarcados. Sua robustez e grande comunidade a tornam uma escolha sólida para projetos de grande escala."
    },
    {
        "id" : 5,
        "name" : "Ruby",
        "langname" : "ruby",
        "desc" : "Ruby é uma linguagem de programação dinâmica e de alto nível, famosa por sua simplicidade e produtividade. É especialmente conhecida pelo framework Ruby on Rails, que facilita o desenvolvimento de aplicações web. A filosofia do Ruby valoriza a legibilidade do código e a felicidade do programador."
    },
    {
        "id" : 6,
        "name" : "C++",
        "langname" : "cplusplus",
        "desc" : "C++ é uma linguagem de programação de alto desempenho, amplamente utilizada em sistemas que exigem controle sobre recursos de hardware, como jogos, sistemas operacionais e software embutido. Com uma combinação de programação procedural e orientada a objetos, C++ oferece flexibilidade e eficiência."
    },
    {
        "id" : 7,
        "name" : "GO",
        "langname" : "go",
        "desc" : "Go, também conhecido como Golang, é uma linguagem desenvolvida pela Google, focada em simplicidade e eficiência. É ideal para desenvolvimento de servidores e aplicações em nuvem. Go oferece um forte suporte para concorrência e desempenho, tornando-se uma escolha popular para microserviços e sistemas distribuídos."
    }
]

document.addEventListener('DOMContentLoaded', () => {
    list.map((lang) => {
        //criação da div com imagem
        const imgTag = document.createElement('img')
        const imgDiv = document.createElement('div')
        imgTag.setAttribute('src', `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${lang.langname}/${lang.langname}-original.svg`)
        imgDiv.classList.add('imgDiv')

        //criação da div com elemento
        const textDiv = document.createElement('div')
        const nameTag = document.createElement('p')
        nameTag.classList.add('langName')
        const textTag = document.createElement('p')
        textTag.classList.add('langDesc')
        nameTag.textContent = `${lang.name}`
        textTag.textContent = `${lang.desc}`
        textDiv.classList.add('textDiv')

        imgDiv.appendChild(imgTag)
        textDiv.appendChild(nameTag)
        textDiv.appendChild(textTag)

        const knowMore = document.createElement('div')
        knowMore.classList.add('knowMore')
        knowMore.textContent = 'Saiba mais'

        const card = document.createElement('div')
        card.classList.add('card')

        card.appendChild(imgDiv)
        card.appendChild(textDiv)
        card.appendChild(knowMore)
        document.getElementById('container').appendChild(card)
    })
})