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
      <h1>
        <Span id="0" configFields={props.configFields} /> AT{" "}
        <Span id="1" configFields={props.configFields} /> SERVICES AGREEMENT
      </h1>

      <p>
        The Rewards and Performance Solutions practice at{" "}
        <Span id="0" configFields={props.configFields} />
        {props.supplierAlternateNames ? (
          <>
            <span> (which delivers products and services under the </span>
            <Span id="2" configFields={props.configFields} />
            <span>)</span>
          </>
        ) : null}{" "}
        provide a broad range of compensation and rewards and performance
        benchmarking, analytics, survey and consulting services.
      </p>
      <p>
        This <Span id="0" configFields={props.configFields} /> Services
        Agreement (this <strong>“Agreement”</strong>), effective as of the date
        electronically approved or signed, is made and entered into by and
        between <Span id="3" configFields={props.configFields} /> {""}(
        <strong>“Client”</strong>) and{" "}
        <Span id="4" configFields={props.configFields} /> and its Affiliates (“
        <Span id="1" configFields={props.configFields} />” and, together with
        Client, the “parties”).
      </p>
      <p>
        Whereas, Client has selected{" "}
        <Span id="1" configFields={props.configFields} /> to provide certain of{" "}
        <Span id="1" configFields={props.configFields} />{" "}
        <Span id="0" configFields={props.configFields} /> surveys, studies,
        products and consulting services, and{" "}
        <Span id="1" configFields={props.configFields} /> is willing to provide
        such services upon the terms and conditions contained in this Agreement.
        The parties agree to the following terms and conditions:
      </p>
      <ol>
        <li>
          Definitions. As used in this Agreement, the following terms shall have
          the meanings set forth below:
        </li>
        <ol type="a-dot">
          <li>
            <strong>“Affiliates”</strong> means an entity which is controlled
            by, controlling or under common control with{" "}
            <Span id="1" configFields={props.configFields} /> or Client
            respectively.
          </li>
          <li>
            <strong>“Approved User”</strong> means any Client employee approved
            by Client to use or access the Services or Site.
          </li>
          <li>
            <strong>Approved Consultant”</strong> means any third-party
            individual or entity that obtains any{" "}
            <Span id="1" configFields={props.configFields} /> Confidential
            Information for the purpose of performing services for Client.{" "}
          </li>
          <li>
            <strong>“Client Data”</strong> shall mean the information provided
            by Client necessary for{" "}
            <Span id="1" configFields={props.configFields} /> to perform the
            Services.
          </li>
          <li>
            <strong>“Confidential Information”</strong> includes information of
            a business, compensation, or financial nature which one party
            discloses (the “Disclosing Party”) to the other party (the,
            “Receiving Party”) and is designated as being confidential or that a
            reasonable person would consider, from the nature of the information
            and circumstances of disclosure, as confidential to the Disclosing
            Party, including, but not limited to Client Data, Deliverables
            (including information contained in survey/benchmark reports),
            company memoranda, documents, diagrams, data, and/or software
            provided by the Disclosing Party. Confidential Information does not
            include information which: (i) is or becomes generally available or
            known to the public through no fault of the Receiving Party; or (ii)
            has already been or is hereafter independently acquired or developed
            by the Receiving Party without violating any confidentiality
            agreement with or other obligation to the Disclosing Party.
          </li>
          <li>
            <strong>“Deliverables”</strong> means the results of the Services
            (including survey results, reports, processed data or other
            information or materials), written advice, letters and/or other
            advisory materials provided as part of the Services.
          </li>
          <li>
            <strong>“Services”</strong> means the benchmarking surveys, studies,
            products, and consulting services to be performed by or on behalf of
            <Span id="1" configFields={props.configFields} /> as further
            described in a Statement of Work attached to, or entered into
            pursuant to, this Agreement.
          </li>
          <li>
            <strong>“Site”</strong> will mean the website controlled by{" "}
            <Span id="1" configFields={props.configFields} />
            through which certain Services may be accessible or Deliverables
            provided.
          </li>
          <li>
            <strong>“Statement of Work”</strong> shall mean a supplement to this
            Agreement that particularly describes the Services to be furnished
            by <Span id="1" configFields={props.configFields} />, the fees for
            such Services, and any additional terms and conditions pertaining
            thereto.
          </li>
        </ol>
        <li>
          <strong>Fees and Expenses.</strong> The fees set forth in the
          applicable Statement of Work shall be payable within thirty (30) days
          of the invoice date. If no specific written fee applies, the fees will
          be calculated with reference to the time spent by{" "}
          <Span id="1" configFields={props.configFields} />, using our
          prevailing standard hourly rates for each category of staff and unless
          otherwise agreed <Span id="1" configFields={props.configFields} />{" "}
          will bill Client monthly.{" "}
          <Span id="1" configFields={props.configFields} />n will invoice Client
          via email, and all payments will be made via electronic payment.
          Client shall pay all reasonable pre-approved travel and related living
          expenses incurred by <Span id="1" configFields={props.configFields} />
          's personnel in performing Services.{" "}
          <Span id="1" configFields={props.configFields} /> reserves the right
          to charge interest on undisputed, excessively past due invoices at a
          rate up to 1% per annum above Barclays Bank plc base lending rate from
          time to time calculated on a daily basis. Client is responsible for
          any and all taxes, however designated, that are levied or based on
          this Agreement, the charges stated in this Agreement, or the Services
          or their use, excluding taxes based on the net income of
          <Span id="1" configFields={props.configFields} />.
        </li>
        <li>
          <strong>Client Responsibilities.</strong>
          <ol type="a-dot">
            <li>
              Client agrees to submit on-time, complete, up-to-date and accurate
              Client Data in accordance with{" "}
              <Span id="1" configFields={props.configFields} />
              ’s instructions as necessary for the Services. If the Client Data
              submission is late or incomplete, Deliverables may be suspended
              until the Client Data is received.
            </li>
            <li></li>
            <li>
              A password will be assigned to each Approved User for access to
              the Site, if applicable. Client will provide{" "}
              <Span id="1" configFields={props.configFields} /> with a list of
              its individuals to be enabled as Approved Users.{" "}
              <Span id="1" configFields={props.configFields} /> will disable
              passwords for any current Approved User upon request. Client and
              Approved Users will not share passwords without the express
              written consent of{" "}
              <Span id="1" configFields={props.configFields} />. Any unapproved
              use of or access to the Site, is prohibited, and will terminate
              any permission or license granted under this Agreement to use the
              Site, and the Services.
            </li>
            <li>
              If Client desires to use a data entry contractor solely to provide
              Client Data to <Span id="1" configFields={props.configFields} />{" "}
              on behalf of Client, Client will enforce this Agreement with such
              contractor, and will require the contractor to destroy any{" "}
              <Span id="1" configFields={props.configFields} /> Confidential
              Information the contractor received when its services to Client
              are complete.
            </li>
            <li>
              If Client desires to provide{" "}
              <Span id="1" configFields={props.configFields} /> Confidential
              Information to an Approved Consultant, at{" "}
              <Span id="1" configFields={props.configFields} />
              's discretion, the Approved Consultant must first enter into a
              non-disclosure agreement provided by{" "}
              <Span id="1" configFields={props.configFields} />. Client agrees
              that <Span id="1" configFields={props.configFields} /> may share
              this Agreement and any applicable Statement of Work with the
              requested Approved Consultant.{" "}
              <Span id="1" configFields={props.configFields} />
              reserves the right to deny or terminate access of an Approved
              Consultant at any time, and Client will cease providing{" "}
              <Span id="1" configFields={props.configFields} />
              Confidential Information to such Approved Consultant upon notice.
            </li>
          </ol>
        </li>
        <li>
          <strong>Confidential Information and Personal Data</strong>
          <ol type="a-dot">
            <li>
              Each party will use reasonable efforts to cause its employees to
              minimize distribution and duplication and prevent unapproved
              disclosure of Confidential Information.
            </li>
            <li>
              <Span id="1" configFields={props.configFields} /> and its
              Affiliates may use Client Data to produce reports, analysis, or
              results for services and disclose them to:{" "}
              <Span id="1" configFields={props.configFields} />
              Affiliates, employees, agents, subcontractors, counsel and
              auditors; Client; other{" "}
              <Span id="1" configFields={props.configFields} /> customers,
              provided that such Client Data is aggregated and is not
              individually identifiable. Due to the continued use of data in
              active and archival surveys, Client Data will not be returned or
              destroyed and will be retained in accordance with{" "}
              <Span id="1" configFields={props.configFields} />
              ’s corporate record retention schedules.
            </li>
            <li>
              Subject to Clause 3(d) and Clause 4(d), Client and its Approved
              Users may only disclose{" "}
              <Span id="1" configFields={props.configFields} /> Confidential
              Information to Affiliates for which Client Data has been
              submitted, Approved Consultants and the employees of such entities
              with a need to know such{" "}
              <Span id="1" configFields={props.configFields} />
              Confidential Information. Client and its Approved Users will not
              disclose or make available{" "}
              <Span id="1" configFields={props.configFields} /> Confidential
              Information, including
              <Span id="1" configFields={props.configFields} /> Confidential
              Information contained in the Deliverables, to any other Client
              Affiliates, or to any other third party.
            </li>
            <li>
              Where Client or Approved Users disclose any Deliverables to its
              Affiliates, Client shall procure:
            </li>
            <li>
              the Deliverables are disclosed in full and no disclaimers are
              removed from the Deliverables prior to disclosure;
            </li>
            <li>
              that all such recipients accept such Deliverables: (i) on the
              basis <Span id="1" configFields={props.configFields} />
              's aggregate liability, collectively, to those recipients and
              Client is no greater than our aggregate liability to Client as set
              out in this Agreement and (ii) subject to an obligation not to
              disclose such Information to third parties, other than as required
              by law or court order.
            </li>
            <li>
              Client agrees that{" "}
              <Span id="1" configFields={props.configFields} /> may disclose
              that Client and/or Affiliates are participants in an applicable
              survey. Survey participant lists may show general company
              information specific to Client/Affiliates, including some or all
              of the following: (i) company name; (ii) industry; (iii)
              headquarters location; (iv) revenue category; (v) actual revenue
              amount for public independent corporations; (vi) headcount
              category; (vii) company ownership (public/private); (viii) month
              Client Data was submitted; (ix) primary location and countries
              from which Client Data was submitted; and (x) primary sales
              channel.
            </li>
            <li>
              To the extent that any personal data is processed by the parties
              pursuant to this Agreement, each Party will observe all applicable
              requirements of data protection laws and the data protection terms
              set forth in Exhibit A to this Agreement shall apply.
            </li>
            <li>
              The parties agree that (i){" "}
              <Span id="1" configFields={props.configFields} /> is not able to
              perform its obligations to Client under the Agreement unless
              Client provides personal data relevant to the Services, (ii) that
              such personal data is necessary to the performance of the Services
              in support of Client’s business purposes as that term is defined
              under applicable law, and (iii) such personal data is not provided
              to
              <Span id="1" configFields={props.configFields} /> in exchange for
              any monetary or other valuable consideration from{" "}
              <Span id="1" configFields={props.configFields} /> to Client.
            </li>
            <li>
              Confidential Information may be disclosed pursuant to a subpoena
              or other valid legal or administrative process, provided that the
              receiving party shall notify the disclosing party of such required
              disclosure and the disclosing party has had a reasonable
              opportunity to quash, modify or otherwise contest, such process
              (at the disclosing party’s expense).
            </li>
          </ol>
        </li>
        <li>
          <strong>Ownership and Licensing Rights.</strong>{" "}
          <Span id="1" configFields={props.configFields} /> will retain all
          right, title and interest in and to all intellectual property rights
          embodied in or associated with the Services and in and to any
          Deliverables posted or available through the Services, including
          copyrights, patents, and trademarks. If applicable,{" "}
          <Span id="1" configFields={props.configFields} /> hereby grants Client
          a paid-up, worldwide, non-transferable, and non-exclusive license to
          access and use the Site during the term of and only in accordance with
          this Agreement in order to provide Client Data and receive, use and
          copy the Deliverables. The Deliverables are copyrighted by{" "}
          <Span id="1" configFields={props.configFields} />. Client is granted a
          perpetual, worldwide, paid-up, royalty-free, non-exclusive license to
          use and copy the Deliverables for Client's internal business purposes
          only. Client will not undertake, cause, permit or approve the
          modification, creation of derivative works, translation, reverse
          engineering, decompiling, disassembling or hacking of the Services or
          Deliverables or any part thereof; and will not remove, obscure, make
          illegible or alter any notices or indications of the intellectual
          property rights that are affixed on, contained in or otherwise
          connected to any Services or Deliverables or other{" "}
          <Span id="1" configFields={props.configFields} /> materials.
        </li>
        <li>
          <strong>Term. </strong>
          The term of this Agreement shall continue in perpetuity until either
          party provides 30 days prior written confirmation of termination. The
          term of each SOW will be set forth therein. If Client terminates this
          Agreement or an applicable SOW, all unpaid undisputed fees and
          expenses will become immediately due and payable and no refunds or
          credits are provided. Client will dispute any fees without undue delay
          and in good faith.
        </li>
        <li>
          <strong>Liability and Indemnification. </strong>
          <ol type="a-dot">
            <li>
              THE SERVICES ARE MADE AVAILABLE ON AN "AS-IS WHERE IS" BASIS
              WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. CLIENT
              ACKNOWLEDGES THAT THE SERVICES AND THE CONTENT DO NOT CONSTITUTE
              OR SUBSTITUTE FOR LEGAL ADVICE.
            </li>
            <li>
              <Span id="1" configFields={props.configFields} />
              ’S TOTAL LIABILITY TO CLIENT AND ITS AFFILIATES RELATING TO THIS
              AGREEMENT AND SERVICES PERFORMED FOR CLIENT SHALL NOT EXCEED THE
              ANNUAL FEES PAID FOR SUCH SERVICES UNDER THE APPLICABLE STATEMENT
              OF WORK. IN NO EVENT WILL EITHER PARTY BE LIABLE FOR ANY INDIRECT,
              CONSEQUENTIAL, INCIDENTAL, SPECIAL, LOSS OF PROFITS, GOVERNMENT
              FINES, OR OTHER SIMILAR DAMAGES, EVEN IF SUCH LOSS WAS REASONABLY
              FORESEEABLE OR A PARTY HAS BEEN ADVISED OF THE POSSIBILITY OR
              LIKELIHOOD OF SUCH DAMAGES.
            </li>
            <li>
              <Span id="1" configFields={props.configFields} />N WILL INDEMNIFY
              AND DEFEND CLIENT FROM ANY CLAIMS, DAMAGES, LOSSES, AND EXPENSES
              (INCLUDING REASONABLE ATTORNEYS’ FEES AND EXPENSES) THAT THE SITE
              OR SERVICES INFRINGE A THIRD PARTY’S INTELLECTUAL PROPERTY RIGHTS,
              UNLESS THE CLAIM IS BASED ON THE CLIENT’S ALTERATION OR MISUSE OF
              THE SITE OR SERVICES. SUBJECT TO
              <Span id="1" configFields={props.configFields} />
              ’S INFRINGEMENT INDEMNITY OBLIGATION, CLIENT WILL INDEMNIFY AND
              DEFEND <Span id="1" configFields={props.configFields} /> FROM AND
              AGAINST ANY AND ALL CLAIMS, DAMAGES, LOSSES, AND EXPENSES
              (INCLUDING REASONABLE ATTORNEYS’ FEES AND EXPENSES) MADE BY
              CLIENT’S CURRENT AND FORMER EMPLOYEES, AFFILIATES, BENEFIT PLANS,
              AND OTHER PARTICIPANTS RELATED TO CLIENT’S USE OF THE SERVICES.
            </li>
            <li>
              <Span id="1" configFields={props.configFields} /> will endeavor to
              make the Site available to Client’s Approved Users 24 hours per
              day, 7 days per week, except during periods of scheduled or
              emergency maintenance.
            </li>
            <li>
              Each party acknowledges that damages may be an inadequate measure
              of loss in the event of breach by the other party of this
              Agreement and accordingly in such event the non-breaching party
              shall be entitled to seek equitable remedies (including injunction
              or otherwise).
            </li>
          </ol>
        </li>
        <li>
          <strong>Miscellaneous. </strong>
          <ol type="a-dot">
            <li>
              This Agreement, the applicable Statements of Work, or fully
              executed amendments that may be presented to Client from time to
              time, constitute the entire agreement of the parties and supersede
              all previous oral or written negotiations and agreements relating
              to the subject matter of this Agreement. Each Statement of Work
              will be a separate agreement between{" "}
              <Span id="1" configFields={props.configFields} /> (or an{" "}
              <Span id="1" configFields={props.configFields} /> Affiliate) and
              Client (or a Client Affiliate). Only the entities that sign a
              Statement of Work shall be liable for their respective obligations
              under that Statement of Work. In the event any terms of any
              Statement of Work conflict with the terms contained in this
              Agreement, the terms in a Statement of Work shall prevail.
            </li>
            <li>
              This Agreement will be construed and enforced in accordance with
              the laws of England and the jurisdiction of the courts of England
              to settle any dispute or claim that arises out of or in connection
              with this Agreement or its subject matter or formation (including
              non-contractual disputes or claims).
            </li>
            <li>
              It is agreed that the parties’ respective obligations that by
              their nature continue beyond the termination or expiration of this
              Agreement include, but are not limited to, those contained in
              Sections 4, 5, 7, and 8.
            </li>
            <li>
              Neither party will be liable for inadequate performance to the
              extent caused by a condition (for example: natural disaster, act
              of war or terrorism, riot, labour condition, governmental action,
              and Internet disturbance) that was beyond the party's reasonable
              control.
            </li>
            <li>
              If any part of this Agreement is found unenforceable, the
              remaining provisions will remain in full force.
            </li>
            <li>There are no third-party beneficiaries to this Agreement.</li>
            <li>
              This Agreement will be binding on the parties and their respective
              successors and assigns. Neither party may assign its rights or
              obligations hereunder without the prior written consent of the
              other party, except either party may assign its rights and
              obligations to an Affiliate.
            </li>
            <li>
              Client agrees that{" "}
              <Span id="1" configFields={props.configFields} /> may provide
              Client with notices by email or regular mail.
            </li>
            <li>
              The delay or failure to assert a right or to insist upon
              compliance with any term of this Agreement shall not constitute a
              waiver of that right or excuse a similar subsequent failure to
              perform any such term or condition.
            </li>
            <li>
              Nothing in this Agreement shall be interpreted as placing the
              parties in an employment, partnership, joint venture or agency
              relationship and neither party shall have the right or authority
              to obligate or bind the other party on its behalf.
            </li>
            <li>
              Client may access content and resources, compensation tools and
              compensation news (the "Content") through the Site for internal
              business purposes of Client only.{" "}
              <Span id="1" configFields={props.configFields} /> shall have the
              right to alter or remove such Content from the Site from time to
              time in its sole discretion, and such Content is provided on an
              "as is" basis.
            </li>
          </ol>
        </li>
      </ol>

      <div className="table">
        <div className="row">
          <div className="cell half">
            This Services Agreement is agreed to by:
            <div className="signature">
              <p className="name">
                <strong>For and on behalf of Client:</strong>
              </p>
              <p>
                Signed:
                <hr />
              </p>
              <p>Name:</p>
              <p>Title:</p>
              <p>Date:</p>
            </div>
          </div>
          <div className="cell half">
            <br />
            <div className="signature">
              <p className="name">
                <strong>
                  For and on behalf of{" "}
                  <Span id="1" configFields={props.configFields} />
                </strong>
              </p>
              <p>
                Signed:
                <hr />
              </p>
              <p>Name:</p>
              <p>Title:</p>
              <p>Date:</p>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer" />
    </article>
  );
};

export default SupplierContract;
