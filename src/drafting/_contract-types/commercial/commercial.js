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

      <div className="table">
        <div className="row">
          <div className="cell half">
            <Span id="0" configFields={props.configFields} />
          </div>
          <div className="cell half"></div>
        </div>
        <div className="row">
          <div className="cell half">
            <div className="flex-100">
              <Span id="1" configFields={props.configFields} />
            </div>
            <div className="flex-100">
              <Span id="2" configFields={props.configFields} />
            </div>
            <div className="flex-100">
              <Span id="3" configFields={props.configFields} />
            </div>
          </div>
          <div className="cell half">
            <div className="flex-100">
              <Span id="4" configFields={props.configFields} />
            </div>
            <div className="flex-100">
              <Span id="5" configFields={props.configFields} />
            </div>
          </div>
        </div>
      </div>

      <p>
        This Non-Disclosure Agreement (the "Agreement") is made as of{" "}
        <Span id="0" configFields={props.configFields} /> between COUNTERPARTY (
        <strong>"Counterparty"</strong> or the{" "}
        <strong>"Disclosing Party"</strong>) and{" "}
        <Span id="2" configFields={props.configFields} /> (“Recipient”). The
        Recipient and Counterparty may be referred to herein as the Parties. In
        consideration of and as a condition to Counterparty furnishing to the
        Recipient certain information relating to the possible sale (the{" "}
        <strong>“Transaction”</strong>) by funds (<em>"Funds"</em>) or other
        vehicles managed by Counterparty (jointly, the
        <strong>“Seller”</strong>) of certain limited partnership interests as
        well as similar types of interests and/or shares (the{" "}
        <strong>“Investment Interests”</strong>) in those limited partnerships
        and similar foreign entities (the <strong>“Partnerships”</strong>.), the
        Recipient acknowledges the confidential and/or proprietary nature of the
        Confidential Information (as defined below) and agrees that it will use
        such Confidential Information and maintain the confidentiality of such
        Confidential Information in accordance with the following terms of this
        letter:
      </p>
      <ol>
        <li>
          This Agreement is applicable to all and any information in whatever
          form (including in oral, written, electronic and visual form) which is
          disclosed by or on behalf of Counterparty and Counterparty's
          affiliates to the Recipient or its Representatives (as this term is
          defined below) whether before or after the execution of this Agreement
          (the "Confidential Information"). Confidential Information consists of
          information regarding the Sellers, the Partnerships, the Investment
          Interests, Counterparty and their affiliates including technical,
          operational, legal, commercial, economic/financial or other
          information related to the Transaction, the Sellers, the Partnerships
          and their affiliates and the Investments Interests. Confidential
          Information shall also include: (i) all notes, analyses, compilations
          or other documents prepared by the Recipient or any of its
          Representatives which contain, reflect or are based upon, in whole or
          in part, the Confidential Information; (ii) the existence and contents
          of this Agreement and of any discussions and negotiations between
          Altamar and the Recipient relating to the Transaction or any of its
          terms, conditions or other facts with respect to it (including the
          status of such negotiations);
        </li>
        <li>
          The Recipient agrees for itself and on behalf of its Representatives
          to: (i) treat and keep all Confidential Information in strict
          confidence; (ii) keep the Confidential Information securely and
          properly protected against theft, damage, loss or unauthorised access
          (including access by electronic means); (iii) not to disclose the
          Confidential Information to any third party other than a Recipient
          Representative without Counterparty's prior written consent; (iv) not
          to use the Confidential Information for any purpose other than the
          evaluation of the Transaction and, in particular, not to use the
          Confidential Information for his own business or to Counterparty or
          any Seller's detriment; (v) disclose the Confidential Information only
          to its directors, employees, equity partners, financial and legal
          advisors (collectively, the "Representatives") and then only on a
          need-to-know basis and after each one of them has agreed to be bound
          by the terms of this Confidentiality Agreement. In any event the
          Recipient shall be liable for all the damages caused due to any breach
          of this Agreement by any of its Representatives.
        </li>
        <li>
          This Agreement shall not apply to such Confidential Information which
          might otherwise be subject to its terms but which the Recipient can
          demonstrate that:
          <ol type="a">
            <li>
              is in, or which enters into, the public domain otherwise than as a
              consequence of any breach of the terms of this Agreement; or
            </li>
            <li>
              is or becomes known to the Recipient from a source other than
              Counterparty provided that such source is not known by the
              Recipient or its Representatives, after due inquiry, to have been
              disclosed in violation of an obligation or confidentiality; or
            </li>
            <li>
              in the case there is a requirement to disclose Confidential
              Information or make any public announcement by law or by any
              applicable rule or requirement from a court of competent
              jurisdiction or administrative authority.
            </li>
          </ol>
          In the event of paragraph (c) above, the Recipient, to the extent
          legally possible, shall inform the Disclosing Party in writing of the
          full circumstances of the disclosure and the information required to
          be disclosed with a view of agreeing the form, content and timing of
          the disclosure. In any event the Recipient shall use commercially
          reasonable efforts to obtain assurances that any Confidential
          Information will be afforded confidential treatment. Once any
          Confidential Information is disclosed pursuant to paragraph (c) above
          the Recipient shall provide the Disclosing Party with copy of the
          disclosure.
        </li>
        <li>
          The Recipient shall promptly, on written demand from Counterparty (and
          in any event within five days of the date of such demand), return to
          Counterparty, destroy or permanently erase all the Confidential
          Information (including all copies of it and all documents, records,
          reports or other writing whatsoever reflecting or analyzing any
          Confidential Information) held by the Recipient or by any of its
          Representatives and confirm to Counterparty in writing that the
          Recipient and all its Representatives have complied with the
          provisions of this paragraph. To the extent that the Recipient or any
          of its Representatives were required to retain any Confidential
          Information by law or to satisfy the rules or regulations of a
          regulatory body to which the Recipient or such person is subject the
          Recipient shall not be obliged to comply with the requirements of this
          paragraph in connection with any such Confidential Information. For
          the avoidance of doubt, the obligations of confidentiality in this
          Confidentiality Agreement will survive termination and will continue
          to apply to such retained Confidential Information.
        </li>
        <li>
          The Recipient shall direct all communications or requests for
          Confidential Information to Counterparty. The Recipient and any of its
          Representatives shall not contact or maintain direct contact with any
          of the Partnerships (including, for the sake of clarity, their
          management company, general partner, advisors, any of their
          respectives affiliates, representatives or present or former portfolio
          companies) with respect to any matter pertaining to, or otherwise
          related to the Transaction. The Recipient and its Representatives may
          contact any of such Partnerships in the ordinary course of the
          Recipient's business provided that such contact is for a purpose
          unrelated to the Transaction and provided further that no Confidential
          Information is disclosed or discussed.
        </li>
        <li>
          The obligations in this Confidentiality Agreement are continuing and,
          in particular, shall survive the termination of any discussions or
          negotiations between the Parties. Notwithstanding the foregoing the
          obligations in this Agreement shall terminate: (a) the date of the
          consummation of the Transaction between the parties; or (b) 24 months
          from the date the Recipient has returned all Confidential Information
          or confirmed that the Recipient and all of its Representatives have
          destroyed or permanently erased all copies of Confidential Information
          made by them as provided in 4 above. Termination of the obligations in
          this Agreement will not release the Recipient from liability for
          breach before such termination.
        </li>
        <li>
          No Confidential Information or anything else in this Agreement shall
          constitute an offer or form the basis of any contract and Counterparty
          may terminate negotiations with the Recipient at any time without
          giving any reason and without incurring any liability to the
          Recipient.
        </li>
        <li>
          This Agreement does not entail the granting of any warranty or
          representation as to the accuracy, reliability or completeness of any
          Confidential Information. Counterparty declines any responsibility or
          liability for the use of Confidential Information by the Recipient or
          its Representatives.
        </li>
        <li>
          The rights of Counterparty under this Agreement may be assigned in
          whole or in part from time to time without requiring your prior
          consent. Nevertheless any such assignment shall be promptly notify to
          the Recipient upon its occurrence. The Recipient shall not be entitled
          to assign its rights under this Agreement to any other party without
          the Disclosing Party's prior written consent.
        </li>
        <li>
          For convenience, the Parties may execute any number of counterparts of
          this Agreement, each of which shall be an original and all of which
          taken together shall constitute a single instrument. Delivery of a
          signed counterpart of this Agreement by telecopy or email transmission
          shall constitute valid and sufficient delivery thereof.
        </li>
        <li>
          Each of the Sellers, the Partnerships and their respective sponsors or
          affiliates are intended third party beneficiaries of this Agreement.
          The Recipient will indemnify the Seller, each sponsor, general partner
          and manager of the Partnerships, each Partnership and Counterparty
          (the <strong>"Indemnified Parties"</strong>), as appropriate, against
          any and all direct or indirect loss, damages, liabilities, costs and
          expenses suffered or incurred by them as a result of the breach or
          threatened breach of any of the obligations undertaken by the
          Recipient in this letter and any Recipient Representative failing to
          keep confidential the Confidential Information.
        </li>
        <li>
          Without prejudice to any rights and remedies otherwise available at
          law or in equity, the Indemnified Parties, as appropriate, shall be
          entitled to equitable relief by way of injunction if the Recipient or
          any of its Representatives breaches or threatens to breach any of the
          terms of this Agreement. In the event of any such legal action, the
          prevailing party shall be entitled to collect its reasonable
          attorneys’ fees and court costs.
        </li>
        <li>
          This Agreement shall be read and construed in accordance with Spanish
          common law ("Derecho común español") and each Party agrees to submit
          to the exclusive jurisdiction of the courts of Madrid waiving their
          right to any other forum that may apply.
        </li>
      </ol>
      <p>
        Please confirm your agreement to the terms of this Confidentiality
        Agreement by arranging a copy to be signed on your behalf by a duly
        authorised signatory, dated and returned to Counterparty at the above
        address.{" "}
      </p>
      <p>Very truly yours,</p>
      <div className="table">
        <div className="row">
          <div className="cell half">
            <div className="flex-100">
              <strong>
                <Span id="5" configFields={props.configFields} />
              </strong>
            </div>
            <div className="flex-100">
              <strong>&nbsp;</strong>
            </div>
            <div className="signature">
              <p>
                Signed:
                <hr />
              </p>
              <p>By:</p>
              <p>Title:</p>
            </div>
          </div>
          <div className="cell half">
            <div className="flex-100">
              <strong>ACCEPTED AND AGREED TO:</strong>
            </div>
            <div className="flex-100">
              <strong>
                <Span id="2" configFields={props.configFields} />
              </strong>
            </div>
            <div className="signature">
              <p>
                Signed:
                <hr />
              </p>
              <p>By:</p>
              <p>Title:</p>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer" />
    </article>
  );
};

export default SupplierContract;
