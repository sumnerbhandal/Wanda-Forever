import React, { useState, useEffect } from "react";

const DefaultContract = (props) => {
  return (
    <article id="contract" className="contract">
      <div className={props.showHeader ? "header" : "header  hide"}>
        <div className="column-left">
          <span
            className={
              props.configFields[0].active
                ? "placeholder focused"
                : "placeholder"
            }
          >
            {props.configFields[0].html}
          </span>{" "}
          <span
            className={
              props.configFields[1].active
                ? "placeholder focused"
                : "placeholder"
            }
          >
            {props.configFields[1].html}
          </span>{" "}
          <span
            className={
              props.configFields[2].active
                ? "placeholder focused"
                : "placeholder"
            }
          >
            {props.configFields[2].html}
          </span>{" "}
        </div>
        <div className="column-right">
          <img src="https://cdn.dribbble.com/users/2293185/screenshots/10294743/media/5996ff97d8ba0c693f930328c64646e4.png?compress=1&resize=1200x900&vertical=top" />
        </div>
        <hr />
      </div>

      <h1 className="xl">Employment Contract</h1>

      <p>
        This contract, dated on the{" "}
        <span
          className={
            props.configFields[3].active ? "placeholder focused" : "placeholder"
          }
        >
          {props.configFields[3].html}
        </span>{" "}
        is made between{" "}
        <span
          className={
            props.configFields[4].active ? "placeholder focused" : "placeholder"
          }
        >
          {props.configFields[4].html}
        </span>{" "}
        and{" "}
        <span
          className={
            props.configFields[5].active ? "placeholder focused" : "placeholder"
          }
        >
          {props.configFields[5].html}
        </span>{" "}
        of{" "}
        <span
          className={
            props.configFields[6].active ? "placeholder focused" : "placeholder"
          }
        >
          {props.configFields[6].html}
        </span>
        . This document constitutes an employment agreement between these two
        parties and is governed by the laws of{" "}
        <span
          className={
            props.configFields[7].active ? "placeholder focused" : "placeholder"
          }
        >
          {props.configFields[7].html}
        </span>
        . WHEREAS the Employer desires to retain the services of the Employee,
        and the Employee desires to render such services, these terms and
        conditions are set forth. IN CONSIDERATION of this mutual understanding,
        the parties agree to the following terms and conditions:
      </p>

      <p>
        Recipient and <span className="placeholder">[X]</span> may be referred
        to herein together as the “Parties” and individually as a “Party”.
      </p>

      <p>
        in connection with a potential financing transaction, either in equity
        or debt format, for the acquisition and subsequent promotion of a site
        in <span className="placeholder">[•]</span> (hereinafter, the
        "transaction").
      </p>

      <p>
        NOW, THEREFORE, in consideration of the mutual promises, covenants,
        terms and conditions contained in this Agreement, the Parties agree as
        follows:
      </p>
      <ol>
        <li>
          Confidential Information
          <ol>
            {props.showConditionalText ? (
              <li>
                Confidential Information. As used in this Agreement,
                “Confidential Information” means all information whether of a
                real estate, technical, business or other nature that is or may
                be disclosed or imparted by{" "}
                <span
                  className={
                    props.configFields[4].active
                      ? "placeholder focused"
                      : "placeholder"
                  }
                >
                  {props.configFields[4].html}{" "}
                </span>
                to the Recipient. In particular, Confidential Information
                includes includes all information concerning the transaction
                given to the Recipient in any format, including (i) written
                information such as written documentation or email transmission
                via electronic media, (ii) visual information and (iii) oral
                information`
              </li>
            ) : null}
            <li>
              Definitions. In addition to other terms defined herein, as used in
              this Agreement:
              <ol type="a">
                <li>
                  “Representative” means and shall be limited to Recipient’s
                  employees, officers, directors, attorneys and accountants,
                  each of whom need to know the Confidential Information to
                  assist the Recipient, (ii) is informed by the Recipient of the
                  confidential nature of the Confidential Information and (iii)
                  agrees to be bound by this Agreement or otherwise is subject
                  to confidentiality duties or obligations to the Recipient that
                  are no less restrictive than the terms and conditions of this
                  Agreement;
                </li>
                <li>
                  “Person” means any individual, corporation (including any
                  non-profit corporation), general partnership, limited
                  partnership, limited liability partnership, joint venture,
                  estate, trust, company (including any limited liability
                  company or joint stock company), firm or other enterprise,
                  association, organization, entity or governmental or judicial
                  authority, agency, body or tribunal; and
                </li>
              </ol>
            </li>
          </ol>
        </li>

        <li>
          Recipient’s Obligations
          <ol>
            <li>
              The Recipient and its Representatives shall not disclose any
              Confidential Information to any Person (other than to
              Representatives of Recipient as permitted hereunder) or use any
              Confidential Information for any purpose other than evaluating the
              Investment or Financing.
            </li>
            <li>
              Notwithstanding the foregoing sentence, the Recipient shall be
              permitted to disclose Confidential Information in accordance with
              judicial or other governmental order or as required by a
              non-waivable provisions of applicable law, provided that (i) the
              Recipient gives the Disclosing Party reasonable notice prior to
              such disclosure and (ii) the Recipient reasonably complies with
              any applicable protective order or equivalent (iii) the Recipient
              discloses no more than that portion of the Confidential
              Information which, on the advice of the Recipient’s legal counsel,
              is legally required to be disclosed and, (iv) upon the Disclosing
              Party’s request, shall use commercially reasonable efforts to
              obtain assurances from the applicable court or agency that such
              Confidential Information will be afforded confidential treatment.
            </li>
            <li>
              The Recipient shall not disclose any Confidential Information to
              third parties.
            </li>
            <li>
              The Recipient shall expressly restrict the disclosure, possession,
              knowledge, development and use of Confidential Information to its
              partners, employees, consultants, professional advisors, agents,
              subcontractors and entities controlled by the Recipient or hired
              or engaged by the Recipient who have a legitimate need to know the
              Confidential Information (“Representatives”).
            </li>
            <li>
              The Recipient and its Representatives shall take the best security
              precautions, at least as great as the precautions it takes to
              protect its own Confidential Information, to keep the Confidential
              Information confidential. The Recipient shall be permitted to
              disclose Confidential Information only (i) to the Recipient’s
              Representatives and (ii) in accordance with the foregoing Section
              2.2 and 2.4. If the Recipient wishes to disclose any Confidential
              Information to a Person who is not a Representative, then (i) such
              Recipient shall give advance notice to the Disclosing Party
              identifying such Person and providing details as to such Person’s
              creditworthiness and potential involvement in the Investment and
              (ii) prior to disclosing any Confidential Information, such Person
              must become a party to, and agree to be bound fully by, this
              Agreement, in which event, such Person shall be deemed the
              Recipient for all purposes hereunder, and each of such Person’s
              Representatives shall be deemed a Representative for all purposes
              hereunder.
            </li>
          </ol>
        </li>
      </ol>
    </article>
  );
};

export default DefaultContract;
