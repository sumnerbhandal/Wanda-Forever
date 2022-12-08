const Playbook = [
  {
    count: 0,
    provision: "Arbitration clause",
    issue:
      "CLIENT needs to be able to disclose Confidential Information to its Representatives because CLIENT is set up as a global platform with different teams (with employees or advisors – the Representatives) working on NDAs who are employed / instructed by different CLIENT Group entities (which are Affiliates of the contracting CLIENT Group entity). The inclusion of ‘investors’ is necessary in order to capture investors in the investing Partners Group funds or companies, who may have the legal right to receive investment information and/or a veto right over investments (but who are still subject to confidentiality obligations with CLIENT). CLIENT’s unique set-up is not typical of other LPs, which only invest via flagship funds. CLIENT have mandate clients to whom they have a legal and contractual obligation to share investment memos with, in order to obtain their consent before an investment can be authorized. Excluding mandate clients from the definition of ‘[Representative]’ could therefore hinder CLIENT’s ability to fulfil its fiduciary and/or contractual obligations to such mandate clients. The added compromise wording is meant to provide added and sufficient comfort that these are bona fide legal and contractual requirements limited to mandate clients.",
    tag: "ul",
    recommendation: [
      "The [Recipient] is permitted to disclose [Confidential Information] to the [Recipient's] [affiliates] (“excluding the direct or indirect portfolio companies of funds managed and/or advised by [the Recipient] or its affiliates) as well as [its and their respective] employees, officers, directors, investors under duties of confidentiality, financing sources and professional advisers ('Representatives / Permitted Recipients')."
    ],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Green"
  },
  {
    count: 1,
    provision: "Confidential information",
    issue: "Definition must contain typical exceptions",
    tag: "button",
    recommendation: {
      regular:
        "WHEREAS, the Recipient desires that [X] (“Disclosing Party”) shares certain information that is non-public, ",
      redline: "confidential or proprietary in nature"
    },
    recommendationLabelPresent: [
      "Ensure confidential information definition is limited to information provided by the Provider and does not include (i) information in the public domain (other than as a result of breach by the Client) and (ii) information independently received or already held by the Client, where the Client is not aware that such information is subject to a confidentiality obligation.",
      "Reject inclusion of information provided prior to execution of NDA."
    ],
    advisory: "Red"
  },
  {
    count: 0,
    provision: "Contract (Rights of Third Parties)",
    issue: "Extending application of the contract to non-parties.",
    tag: "ul",
    recommendation: ["Reject in all circumstances."],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Amber"
  },
  {
    count: 0,
    provision: "Damages",
    issue:
      "Requires Client to confirm monetary damages will not be sufficient in the event of breach.",
    tag: "ul",
    recommendation: [
      "Accept damages alone may (rather than “would”) be an adequate remedy.",
      "Accept specific performance/equitable relief may (rather than “can” or “shall”) be sought."
    ],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Amber"
  },
  {
    count: 0,
    provision: "Disclosure required by law",
    issue:
      "Important to ensure Client can disclose information where required by law.",
    tag: "ul",
    recommendation: [
      "If a Provider seeks to impose an obligation to inform/consult with them if such a disclosure is required, this must only be required to the extent permitted by law."
    ],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Amber"
  },
  {
    count: 0,
    provision: "Exclusivity",
    issue:
      "Restricts ability of Client to discuss the planned or similar projects with other parties.",
    tag: "ul",
    recommendation: ["This should always be deleted."],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Amber"
  },
  {
    count: 0,
    provision: "Expiry",
    issue: "Obligation to return or destroy information.",
    tag: "ul",
    recommendation: [
      "Ensure notification request is made in writing.",
      "Client should always retain the option to destroy Confidential Information rather than simply return it.",
      "Ensure permitted to retain copies (i) to the extent required by law/regulation, (ii) on computer backup systems where not technically practicable to fully destroy, and (iii) for bona fide internal compliance purposes.",
      "Reject requirement to notify counterparty if Client decides to no longer be involved in transaction.",
      "Change timing obligation of “immediately” to “promptly” and accept minimum of 10 business days or 14 calendar days."
    ],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Red"
  },
  {
    count: 1,
    provision: "Governing law and jurisdiction",
    issue:
      "Law that governs the contract and jurisdiction where disputes will be heard.",
    tag: "ul",
    recommendation: [
      "Preference for English law to govern the contract, but accept all Western European or US laws.",
      "Preference for the English Courts to settle any disputes, but accept all Western European or US Courts."
    ],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Amber"
  },
  {
    count: 0,
    provision: "Indemnities",
    issue:
      "Requires Client to indemnify Provider for breaches by it of the NDA.",
    tag: "ul",
    recommendation: [
      "Accept provided it is not unduly onerous (i.e. not qualified by reasonableness)."
    ],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Green"
  },
  {
    count: 0,
    provision: "Non-solicitation of employees",
    issue: "Restricts ability of Client to solicit employees of Provider.",
    tag: "ul",
    recommendation: ["Reject in all circumstances."],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Green"
  },
  {
    count: 1,
    provision: "Purpose",
    issue:
      "Provides that Confidential Information can only be used in connection with the specified project.",
    tag: "ul",
    recommendation: [
      "Ensure the definition of the Purpose is specific enough to ensure that the obligations under the NDA apply only to the transaction being considered. Delete unclear phrases such as ‘or a similar transaction’.",
      "Reject any undertaking that the information may not be used in any way that is detrimental to the Provider."
    ],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Green"
  },
  {
    count: 0,
    provision: "Permitted recipients",
    issue:
      "Important to ensure Client can freely disclose information to appropriate persons.",
    tag: "ul",
    recommendation: [
      "Include an ability to disclose to the Client’s (i) group companies/affiliates, (ii) partners, members, employees and directors and (iii) professional advisers, consultants and agents.",
      "Resist obligations to (i) provide Provider with details of all permitted recipients to whom confidential information is provided or (ii) to put in place back-to-back confidentiality arrangements.",
      "Accept obligation to (i) inform permitted recipients of the confidential nature of the information and (ii) be responsible for any breach by the permitted recipients of the terms of the NDA."
    ],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Green"
  },
  {
    count: 0,
    provision: "Restrictions on copying information",
    issue: "Restricts Client from copying Confidential Information.",
    tag: "ul",
    recommendation: ["Reject in all circumstances."],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Green"
  },
  {
    count: 1,
    provision: "Permitted recipients",
    issue:
      "Important to ensure Client can freely disclose information to appropriate persons.",
    tag: "ul",
    recommendation: [
      "Include an ability to disclose to the Client’s (i) group companies/affiliates, (ii) partners, members, employees and directors and (iii) professional advisers, consultants and agents.",
      "Resist obligations to (i) provide Provider with details of all permitted recipients to whom confidential information is provided or (ii) to put in place back-to-back confidentiality arrangements.",
      "Accept obligation to (i) inform permitted recipients of the confidential nature of the information and (ii) be responsible for any breach by the permitted recipients of the terms of the NDA."
    ],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Green"
  },
  {
    count: 0,
    provision: "Standstill",
    issue:
      "Restricts ability of Client dealing in the Provider’s securities. Generally only an issue where the Provider’s securities are listed.",
    tag: "ul",
    recommendation: ["This should always be deleted."],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Green"
  },
  {
    count: 1,
    provision: "Term",
    issue:
      "Important to ensure that Client’s obligations fall away at defined period.",
    tag: "ul",
    recommendation: [
      "Delete any term which exceeds 4 years and revise to not more than 24 months."
    ],
    recommendationLabelPresent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    advisory: "Green"
  }
];

export default Playbook;
