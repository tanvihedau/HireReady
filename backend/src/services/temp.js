const resume = `
Name: Rahul Sharma
Email: rahul.sharma@email.com
Phone: +91-9876543210
Location: Bangalore, India

Summary:
Backend Developer with 4+ years of experience building scalable APIs and microservices.
Proficient in Node.js, Express, MongoDB, and cloud infrastructure. Passionate about
writing clean, maintainable code and delivering high-performance backend systems.

Experience:
- Senior Backend Developer | TechCorp India | 2022 – Present
  • Built and maintained RESTful APIs serving 1M+ requests/day using Node.js & Express
  • Reduced query response time by 40% through MongoDB indexing and aggregation optimization
  • Implemented JWT-based authentication and role-based access control (RBAC)
  • Integrated Redis caching layer, reducing DB load by 35%
  • Containerized services using Docker; set up CI/CD pipelines with GitHub Actions

- Backend Developer | Startup XYZ | 2020 – 2022
  • Developed REST APIs for an e-commerce platform with Node.js and Express
  • Designed MongoDB schemas for product catalog, orders, and user management
  • Worked closely with frontend React team to define API contracts
  • Participated in system design reviews and sprint planning

Education:
- B.Tech in Computer Science | VIT University | 2016 – 2020

Skills:
- Languages: JavaScript (Node.js), TypeScript, Python (basic)
- Frameworks: Express.js, Fastify
- Databases: MongoDB, PostgreSQL, Redis
- DevOps: Docker, GitHub Actions, basic Kubernetes
- Other: JWT, OAuth2, REST API design, WebSockets, Agile/Scrum
`;

const selfDescription = `
Hi, I'm Rahul — a backend developer who genuinely enjoys the craft of building systems
that scale. Over the past 4 years, I've worked on everything from greenfield API design
to optimizing slow queries on production databases at 3 AM.

I care deeply about code quality. I write things I won't be embarrassed to read six months
later. I'm comfortable in Node.js and have spent considerable time tuning MongoDB for
performance — indexing strategies, aggregation pipelines, the works.

Outside of work, I contribute to open source, read system design case studies, and 
occasionally write blog posts on backend patterns. I'm looking for a role where I can 
work on challenging problems, collaborate with a strong team, and keep growing.
`;

const jobDescription = `
Position: Backend Developer (Node.js)
Location: Remote / Bangalore

We are looking for a Backend Developer with strong experience in Node.js and
database design to build scalable and high-performance APIs.

Responsibilities:
- Design and develop scalable RESTful APIs using Node.js and Express.
- Optimize database performance using indexing, query optimization, and caching strategies.
- Implement authentication and authorization mechanisms.
- Work with Redis or similar caching solutions.
- Write clean, maintainable, and testable code.
- Collaborate with frontend and DevOps teams.
- Participate in system design discussions.

Required Skills:
- 3+ years experience in backend development.
- Strong knowledge of Node.js and asynchronous programming.
- Experience with MongoDB and database optimization.
- Understanding of caching strategies (Redis preferred).
- Familiarity with Docker and basic CI/CD workflows.
- Good communication and teamwork skills.

Nice to Have:
- Experience with TypeScript.
- Knowledge of message queues (RabbitMQ, Kafka).
- Exposure to microservices architecture.
`;

module.exports = { resume, selfDescription, jobDescription };