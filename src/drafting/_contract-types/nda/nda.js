import React from "react";

const Span = (props) => {
  const focusOnField = (e) => {
    const target = e.target;
    const targetField = target
      .getAttribute("data-id")
      .replace("text", "config");
    const targetFieldDom = document.getElementById(targetField);

    targetFieldDom.closest(".error-container").classList.add("focused");
    targetFieldDom.focus();
    targetFieldDom.scrollTo();
  };
  return (
    <span
      data-id={`text-${props.id}`}
      className={
        props.configFields[props.id].active
          ? "placeholder focused"
          : "placeholder"
      }
      onClick={focusOnField}
    >
      {props.configFields[props.id].html}
    </span>
  );
};

const SupplierContract = (props) => {
  return (
    <article id="contract" className="contract">
      <h1>CONFIDENTIALITY AGREEMENT</h1>
      <p style={{ width: "100%" }}>
        This Confidentiality Agreement (“<strong>Agreement</strong>”) is made on{" "}
        <Span id="0" configFields={props.configFields} />.
      </p>
      <p>Between</p>
      <p>
        <Span id="1" configFields={props.configFields} /> (company registration
        number <Span id="2" configFields={props.configFields} />) as whose
        registered address is <Span id="3" configFields={props.configFields} />{" "}
        (“Company”); and <Span id="4" configFields={props.configFields} />{" "}
        (company registration number{" "}
        <Span id="5" configFields={props.configFields} />) as whose registered
        address is <Span id="6" configFields={props.configFields} /> (“
        <strong>Client</strong>”);
      </p>
      <p>
        Each a “<strong>party</strong>”, and together the “
        <strong>parties</strong>”.{" "}
      </p>
      <p style={{ width: "100%" }}>
        <strong>RECITALS</strong>
      </p>
      <p>
        WHEREAS the parties have been in discussions or intend to enter into
        discussions concerning <Span id="7" configFields={props.configFields} />{" "}
        (the “<strong>Project</strong>”).
      </p>
      <p>
        WHEREAS the parties are willing to disclose Confidential Information to
        each other solely for the purpose of allowing each party to review and
        consider the Project (“<strong>Permitted Purpose</strong>”).
      </p>
      <p>
        WHEREAS each party wishes to ensure that the other party maintains the
        confidentiality of its Confidential Information. In consideration of the
        benefits to the parties of the disclosure of the Confidential
        Information, the parties have agreed to comply with the following terms
        in connection with the use and disclosure of Confidential Information.
      </p>
      <p>
        <strong>
          <u>IT IS HEREBY AGREED AS FOLLOWS:</u>
        </strong>
      </p>
      <ol>
        <li>
          <strong>DEFINITIONS</strong>
          <br />
          For the purposes of this Agreement, the following expressions shall
          have the following meanings:
          <ol>
            <li>
              “<strong>Authorised Representative</strong>” shall mean any agent,
              auditor, broker, consultant, director, employee, officer,
              professional advisor or (re)insurer of a party, any member of its
              Group, or any agent, auditor, broker, consultant, director,
              employee, officer, professional advisor or (re)insurer of a member
              of its Group;
            </li>
            <li>
              “<strong>Confidential Information</strong>” shall include, but is
              not limited to:
              <ol>
                <li>
                  all confidential, commercial, financial, management and
                  technical information or other information or data of whatever
                  nature relating to the Disclosing Party or to the Disclosing
                  Party’s business or affairs which is disclosed pursuant to the
                  Project;
                </li>
                <li>
                  HR data, actuarial data, agreements, business data,
                  contractual arrangements, financial data, marketing data,
                  policy forms, programmes, records, reports, software,
                  underwriting data, trade secrets or any other information in
                  any form or medium which is disclosed pursuant to the Project
                  whether disclosed in writing, orally or by any other means to
                  the Recipient by, or on behalf of, the Disclosing Party
                  whether before or after the date of this Agreement together
                  with any reproductions, or any part thereof, any information
                  or analysis derived from Confidential Information, any
                  information that would be regarded as confidential by a
                  reasonable business person relating to the Disclosing Party or
                  the Disclosing Party’s Group, and any document identified by
                  the Disclosing Party as confidential which is disclosed by the
                  Disclosing Party to the Recipient;
                </li>
                <li>
                  the fact that discussions and negotiations are taking place
                  concerning the Project and the status of those discussions and
                  negotiations; and
                </li>
                <li>the existence and terms of this Agreement. </li>
              </ol>
            </li>
            <li>
              “<strong>Disclosing Party</strong>” shall mean a party to this
              agreement which discloses or makes available directly or
              indirectly Confidential Information.
            </li>
            <li>
              “<strong>Group</strong>” means in relation to a company, that
              company, each and any subsidiary or holding company from time to
              time of that company, and each and any subsidiary from time to
              time of a holding company of that company.
            </li>
            <li>
              “<strong>Holding company</strong>” and “subsidiary” shall mean a
              "holding company" and "subsidiary" as defined in section 1159 of
              the Companies Act 2006.{" "}
            </li>
            <li>
              “<strong>Permitted Purpose</strong>” shall have the same meaning
              as set out in the recitals.
            </li>
            <li>
              “<strong>Recipient</strong>” shall mean a party to this agreement
              which receives or obtains directly or indirectly Confidential
              Information.
            </li>
          </ol>
        </li>
        <li>
          <strong>DUTY OF CONFIDENTIALITY</strong>
          <ol>
            <li>
              Subject to clause 2.3, in consideration for the exchange and
              disclosure of Confidential Information, the Recipient undertakes
              that it shall:
              <ol type="a">
                <li>
                  treat all Confidential Information as confidential and secret
                  and not use the Confidential Information for any purpose other
                  than for the purposes of evaluating the Confidential
                  Information in connection with the Permitted Purpose;
                </li>
                <li>
                  take all reasonable steps to prevent the disclosure of
                  Confidential Information to unauthorised persons, and apply at
                  least the same security measures and degree of care to the
                  Confidential Information as the Recipient applies to its own
                  confidential information, which the Recipient warrants as
                  providing adequate protection from unauthorised disclosure,
                  copying or use;
                </li>
                <li>
                  not release, disclose or make available the Confidential
                  Information in whole or in part to any third party, except as
                  expressly permitted by this agreement or the prior written
                  consent of the Disclosing Party; and
                </li>
                <li>
                  not use Confidential Information except for the purposes
                  specified in this Agreement
                </li>
                <li>
                  not copy, reduce to writing or otherwise record the
                  Confidential Information except as strictly necessary for the
                  Permitted Purpose (and any such copies, reductions to writing
                  and records shall be the property of the Disclosing Party).
                </li>
              </ol>
            </li>
            <li>
              Notwithstanding the provisions of paragraph 2.1 above, the parties
              acknowledge and agree that:
              <ol>
                <li>
                  The Recipient may disclose Confidential Information to an
                  Authorised Representative who has a need to know such
                  information for the Permitted Purpose, provided that it
                  informs its Authorised Representatives of the confidential
                  nature of the Confidential Information before disclosure and
                  undertakes that such disclosure will be pursuant to the terms
                  and conditions of this Agreement and the terms and conditions
                  will be applicable to an Authorised Representative, and it
                  shall at all times be responsible for any breach of the terms
                  of this agreement by an Authorised Representative; and
                </li>
                <li>
                  In the event that the Recipient is compelled by court or
                  administrative order or rule of law, or by any governmental or
                  other regulatory authority (including any applicable
                  securities exchange) to release or disclose all or part of the
                  Confidential Information, to the extent permitted by law the
                  Recipient will promptly notify the Disclosing Party before
                  responding or complying with such order or rule so that the
                  Disclosing Party may have the opportunity to resist the
                  release or disclosure by timely and appropriate process. If a
                  protective or restraining order is not obtained or if the
                  Disclosing Party waives compliance by the Recipient with the
                  provisions of this Agreement in writing, the Recipient will
                  furnish only that portion of the Confidential Information
                  which it is legally required to disclose.
                </li>
              </ol>
            </li>
            <li>
              The obligations of confidentiality shall not apply to Confidential
              Information which:
              <ol>
                <li>
                  is or subsequently comes into the public domain otherwise than
                  as a result of a breach of this Agreement by the Recipient or
                  its Authorised Representative;
                </li>
                <li>
                  was independently developed by the Recipient without the
                  direct or indirect use of Confidential Information;
                </li>
                <li>
                  is already known to the Recipient prior to disclosure and
                  which prior knowledge the Recipient can clearly demonstrate
                  with written material;
                </li>
                <li>
                  was disclosed to the Recipient by a third party who has a
                  lawful right to receive and disclose the Confidential
                  Information;
                </li>
                <li>
                  is required to be disclosed by law or by a regulatory body as
                  set out in 2.2.2 above; or
                </li>
                <li>
                  the Disclosing Party agrees in writing may be disclosed.
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <strong>INTELLECTUAL PROPERTY</strong>
          <ol>
            <li>
              Nothing in this Agreement shall be construed to grant the
              Recipient any right, licence, patent, know-how, copyright, design
              right, trademark or other intellectual property right of the
              Disclosing Party.
            </li>
          </ol>
        </li>
        <li>
          <strong>RETURN OF INFORMATION</strong>
          <ol>
            <li>
              The Recipient agrees upon request by the Disclosing Party to
              return, within 14 days of such request, to the Disclosing Party
              all Confidential Information submitted in written form and to
              destroy documents created by the Recipient that contain
              Confidential Information, and to certify in writing to the
              Disclosing Party that it has complied with the requirements of
              this clause; provided, however, that the Recipient may retain
              copies of documents that may contain Confidential Information to
              the extent required by law or any applicable governmental or
              regulatory authority or which are necessary for the conduct and
              proper record keeping of the Recipient’s business in accordance
              with standard operating procedures which the Recipient will
              continue to treat as confidential pursuant to the terms of this
              Agreement.
            </li>
            <li>
              The return of Confidential Information shall not release the
              Recipient from its other obligations under this Agreement.
            </li>
          </ol>
        </li>
        <li>
          <strong>TERM AND TERMINATION</strong>
          <ol>
            <li>
              If either party decides not to become, or continue to be involved
              in the Project it shall notify the other party in writing
              immediately. The obligations of each party shall, notwithstanding
              any earlier termination of negotiations or discussions between the
              parties in relation to the Project, continue for a period of 2
              years from the date of this agreement.
            </li>
            <li>
              Termination of this agreement shall not affect any accrued rights
              or remedies to which either party is entitled.{" "}
            </li>
          </ol>
        </li>
        <li>
          <strong>ENTIRE AGREEMENT</strong>
          <ol>
            <li>
              This Agreement contains the entire understanding of the parties
              with respect to the protection of the Confidential Information,
              superseding all prior or contemporaneous agreements or
              understandings, whether written or oral, and may not be modified
              or amended nor any of its provisions waived except by written
              agreement of the parties.
            </li>
            <li>
              Neither party shall assign or otherwise transfer any of our rights
              or obligations under this Agreement without the prior written
              consent of the other.
            </li>
          </ol>
        </li>
        <li>
          <strong>NO CONTRACT OR PARTNERSHIP</strong>
          <ol>
            <li>
              No document or information made available to the Recipient will
              constitute an offer or invitation to form a contract. The
              disclosure of Confidential Information by the Disclosing Party
              shall not form any offer by, or representation or warranty on the
              part of, the Disclosing Party to enter into any further agreement
              in relation to the Project, or the development or supply of any
              product or service to which the Confidential Information relates.
            </li>
            <li>
              Nothing in this agreement is intended to, or shall be deemed to,
              establish any partnership or joint venture between any of the
              parties, constitute any party the agent of another party, nor
              authorise any party to make or enter into any commitments for or
              on behalf of any other party.
            </li>
          </ol>
        </li>
        <li>
          <strong>NOTICES</strong>
          <ol>
            <li>
              All Notices under this Agreement shall be in writing and signed by
              or on behalf of the party giving it and shall be served by sending
              it by pre-paid recorded delivery or registered post to the address
              of the party being served detailed above or as otherwise provided
              by each party for service of any notice and marked for the
              attention of the Company Secretary or the person who signed this
              Agreement on that party’s behalf.
            </li>
            <li>
              Notices sent as set out above shall be deemed served on the second
              business day following posting of the notice.
            </li>
          </ol>
        </li>
        <li>
          <strong>CONSEQUENCES OF BREACH</strong>
          <ol>
            <li>
              It is agreed that money damages would not be a sufficient remedy
              for any breach of this Agreement and that the Disclosing Party
              shall be entitled to seek specific performance and injunctive or
              other equitable relief as a remedy for such breach. Such remedy
              shall not be deemed to be the exclusive remedy for a breach of
              this Agreement, but shall be in addition to all other remedies
              available at law or equity.
            </li>
          </ol>
        </li>
        <li>
          <strong>NO WAIVER</strong>
          <ol>
            <li>
              No failure or delay by the Disclosing Party in exercising any
              right under this Agreement shall operate as a waiver of that
              right.
            </li>
          </ol>
        </li>
        <li>
          <strong>SEVERANCE</strong>
          <ol>
            <li>
              Each provision of this Agreement is severable and distinct from
              the others. The parties intend that every such provision shall
              remain valid and enforceable to the fullest extent permitted by
              law. If any provision is invalid or unenforceable as a rule of
              law, it shall be deemed, to that extent, not to form part of this
              Agreement. All other provisions of the Agreement shall remain in
              full force.
            </li>
          </ol>
        </li>
        <li>
          <strong>THIRD PARTY RIGHTS</strong>
          <ol>
            <li>
              A person who is not a party to this agreement shall not have any
              rights under or in connection with it.
            </li>
          </ol>
        </li>
        <li>
          <strong>GOVERNING LAW</strong>
          <ol>
            <li>
              This agreement and any dispute or claim arising out of or in
              connection with it or its subject matter or formation (including
              non-contractual disputes or claims) shall be governed by and
              construed in accordance with English law.
            </li>
            <li>
              The parties irrevocably agree that the courts of England and Wales
              shall have exclusive jurisdiction to settle any dispute or claim
              that arises out of or in connection with this agreement or its
              subject matter or formation (including non-contractual disputes or
              claims).
            </li>
          </ol>
        </li>
      </ol>
      <div className="table">
        <div className="row">
          <div className="flex-100">
            <p>
              <strong>ACCEPTED AND AGREED:</strong>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="flex-100">
            <p>
              <strong>For and on behalf of Company</strong>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="cell half">
            <div className="signature">
              <p>
                By: <hr />
              </p>
              <p>
                Signed:
                <hr />
              </p>
            </div>
          </div>
          <div className="cell half">
            <div className="signature">
              <p>
                Title: <hr />
              </p>
              <p>
                Date:
                <hr />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="table">
        <div className="row">
          <div className="flex-100">
            <p>
              <strong>For and on behalf of Client</strong>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="cell half">
            <div className="signature">
              <p>
                By: <hr />
              </p>
              <p>
                Signed:
                <hr />
              </p>
            </div>
          </div>
          <div className="cell half">
            <div className="signature">
              <p>
                Title: <hr />
              </p>
              <p>
                Date:
                <hr />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer" />
    </article>
  );
};

export default SupplierContract;
