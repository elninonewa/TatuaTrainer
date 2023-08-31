// You can add new scenarios, but make sure that there is exactly...
// * 1 hackerCard per scenario
// * 3 playerCards per scenario

var scenarios = [
  {
  index:0, 
	hackerCard: {
    	description: "1. Which of the following do you think is the greatest threat to your SJO’s digital resilience?",
    	power: 3,
	},
	playerCards: [
    	{
        	description: "a. Work laptops infected by a virus",
        	power: 3,
    	},
    	{
        	description: "b. Public authorities shutting down our premises",
        	power: 3,
    	},
    	{
        	description: "c. Our social media account being hijacked by a cybercriminal",
        	power: 3,
    	}
	]
},

  {
  index:1,
	hackerCard: {
    	description: "2. If the CEO of your SJO lost their smartphone what would be the greatest risk to your organisation?",
    	power: 3,
	},
	playerCards: [
    	{
        	description: "a. Financial Loss",
        	power: 3,
    	},
    	{
        	description: "b. Information Loss",
        	power: 3,
    	},
    	{
        	description: "c. Reputational damage",
        	power: 3,
    	}
	]
},

  {
  index:2,
	hackerCard: {
    	description: "2a. What aspect of financial loss would affect your organisation?",
    	power: 3,
	},
	playerCards: [
    	{
        	description: "a. Cost of replacing the device",
        	power: 3,
    	},
    	{
        	description: "b. Criminal access to online banking accounts",
        	power: 3,
    	},
    	{
        	description: "c. Criminal access to mobile banking accounts",
        	power: 3,
    	}
	]
  },
  {
  index:3,  
	hackerCard: {
    	description: "2b. What aspect of information loss would affect your organisation?",
    	power: 3,
	},
	playerCards: [
    	{
        	description: "a. Access to password files",
        	power: 3,
    	},
    	{
        	description: "b. Access to sensitive emails ",
        	power: 3,
    	},
    	{
        	description: "c. Access to the organisations contact list",
        	power: 3,
    	}
	]
},
  {
    index:4,
	hackerCard: {
    	description: "2c. What aspect of reputational damage would affect your organisation?",
    	power: 3,
	},
	playerCards: [
    	{
        	description: "a. Access to the organisations social media accounts",
        	power: 3
    	},
    {
        	description: "b. Fraudulent calls and messages to solicit money or favours from stakeholders on CEO's contact list",
        	power: 3,
    	},
    	{
        	description: "c. Use of CEO's photos to create deep fake content eg. compromising situations that create scandals ",
        	power: 3,
    	}
	]
},

  {
    index:5,
	hackerCard: {
    	description: "3. In outsourcing your company's website to a third-party server, what would be greatest risk?",
    	power: 3,
	},
	playerCards: [
    	{
        	description: "a. Eavesdropping and information leakage",
        	power: 3,
    	},
    	{
        	description: "b. Informal agreements with service providers",
        	power: 3,
    	},
    	{
        	description: "c. Poor configurations and standards ",
        	power: 3,
    	}
	]
},

  {
    index:6,
	hackerCard: {
    	description: "3a. Eavesdropping and information leakage",
    	power: 3,
	},
	playerCards: [
    	{
        	description: "a. Loss of organisation's confidential information e.g. financial transactions, operational strategies",
        	power: 3,
    	},
    	{
        	description: "b. Data theft e.g. customer information, passwords",
        	power: 3,
    	},
    	{
        	description: "c. Insertion of fake information by malicious actors",
        	power: 3,
    	}
	]
},
  {
    index:7,
	hackerCard: {
    	description: "3b. Informal agreements with service providers",
    	power: 3,
	},
	playerCards: [
    	{
        	description: "a. Unplanned service shutdowns due to disagreements",
        	power: 3,
    	},
    	{
        	description: "b. Digital project cost creep",
        	power: 3,
    	},
    	{
        	description: "c. Unavailability of digital system support staff due to vendor's poor succession management",
        	power: 3,
    	}
	]
},
  {
    index:8,
	hackerCard: {
    	description: "3c. Poor configurations and standards",
    	power: 3,
	},
	playerCards: [
    	{
        	description: "a. Security and compliance issues",
        	power: 3,
    	},
    	{
        	description: "b. Data integrity compromise",
        	power: 3,
    	},
    	{
        	description: "c. Poor quality digital service delivery",
        	power: 3,
    	}
	]
},

  {
    index:9,
	hackerCard: {
    	description: "4. There has been a sudden departure of your Head of Operations, what would be your greatest concern?",
    	power: 3,
	},
	playerCards: [
    	{
        	description: "a. Loss of Institutional memory (lack of knowledge management) ",
        	power: 3,
    	},
    	{
        	description: "b. No Succession Planning, operational breakdowns and project failure",
        	power: 3,
    	},
    	{
        	description: "c. Loss of access to digital resources",
        	power: 3,
    	}
	]
},
  {
    index:10,
	hackerCard: {
    	description: "4a. What aspect of Institutional memory loss (lack of knowledge management)",
    	power: 3,
	},
	playerCards: [
    	{
        	description: "a. Loss of relationships and contacts",
        	power: 3,
    	},
    	{
        	description: "b. Loss of Intellectual property to competitors",
        	power: 3,
    	},
    	{
        	description: "c. Contracts and agreements lost.",
        	power: 3,
    	}
	]
},
  {
    index:11,
	hackerCard : {
  	description : "4b. No Succession Planning, operational breakdowns and project failure",
  	power : 3,
	},
	playerCards : [
  	{
    	description : "a. Stalled projects",
    	power : 3,
  	},
  	{
    	description : "b. Inability to fill the position",
    	power : 3,
  	},
  	{
    	description : "c. Service delivery operations failure",
    	power : 3,
  	}
	]
  },
  {
    index:12,
	hackerCard : {
  	description : "4c. Loss of access to digital resources",
  	power : 3,
	},
	playerCards : [
  	{
    	description : "a. Unusable password-protected systems",
    	power : 3,
  	},
  	{
    	description : "b. Data and information inaccessible because of e.g. unknown passwords or unknown label or location",
    	power : 3,
  	},
  	{
    	description : "c. Inability to operate proprietary systems that require specialised skills",
    	power : 3,
  	}
	]
  },
  {
    index:13,
	hackerCard : {
  	description : "5. Under Data Protection Legislation compliance, what aspect poses the greatest challenge to your SJO?",
  	power : 3,
	},
	playerCards : [
  	{
    	description : "a. Financial",
    	power : 3,
  	},
  	{
    	description : "b. Disclosure of data holdings",
    	power : 3,
  	},
  	{
    	description : "c. Legal exposure",
    	power : 3,
  	}
	]
  },
  {
    index:14,
	hackerCard : {
  	description : "5a. What aspect of Financial challange?",
  	power : 3,
	},
	playerCards : [
  	{
    	description : "a. Cost of compliance to legal requirements",
    	power : 3,
  	},
  	{
    	description : "b. Exposure to legal fees and lawsuits",
    	power : 3,
  	},
  	{
    	description : "c. Cost of upskilling to fulfil requirements (e.g. technology education & training) ",
    	power : 3,
  	}
	]
  },
  {
    index:15,
	hackerCard : {
  	description : "5b. What aspect of disclosure of data holdings",
  	power : 3,
	},
	playerCards : [
  	{
    	description : "a. Attracts government surveillance",
    	power : 3,
  	},
  	{
    	description : "b. Causes clients and stakeholders to lose trust in your organisation ",
    	power : 3,
  	},
  	{
    	description : "c. Exposes vulnerable clients to third party risks",
    	power : 3,
  	}
	]
  },

  {
    index:16,
	hackerCard : {
  	description : "5c. What aspect of legal exposure",
  	power : 3,
	},
	playerCards : [
  	{
    	description : "a. Organisation can be shut down or de-registered",
    	power : 3,
  	},
  	{
    	description : "b. Organisation can be diverted from fulfilling mandates because most time is spent in court",
    	power : 3,
  	},
  	{
    	description : "c. Reputational damage to the organisation due to publicised legal challenges",
    	power : 3,
  	}
	]
  },

  {
    index:17,
	hackerCard : {
  	description : "6. What immediate steps will your SJO take to improve its digital resilience?",
  	power : 3,
	},
	playerCards : [
  	{
    	description : " ",
    	power : 3,
  	},
  	{
    	description : " ",
    	power : 3,
  	},
  	{
    	description : " ",
    	power : 3,
  	}
	]
  },
];