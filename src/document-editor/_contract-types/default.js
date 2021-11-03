import React, { useState } from "react";
import ML from "../_assets/ml.svg";
import Button from "../../_input/button/button";
import MLWhite from "../_assets/ml-white.svg";
import PlaybookWhite from "../_assets/playbook-white.svg";

const ProvisionExample = (
  <>
    <img src={MLWhite} /> Confidential information
  </>
);
const ViewPlaybookSuggestion = (
  <>
    <img src={PlaybookWhite} /> View Playbook Suggestion
  </>
);

const LabelPreview = (props) => {
  function highlightLabel(e) {
    const element = e.target.closest("span.labelled");
    element.style.backgroundColor = "#CCD3E4";
  }
  function highlightLabelEnd(e) {
    const element = e.target.closest("span.labelled");
    element.style.backgroundColor = "inherit";
  }

  function test() {
    props.setPreviewOpen(!props.previewOpen);

    setTimeout(function () {
      const selectedAccordion = document.getElementById(
        "confidential_information"
      ).childNodes[0];
      console.log(selectedAccordion);
      selectedAccordion.click();
    }, 400);
  }
  return (
    <div className="preview-label-menu">
      <div
        className="label-button-group"
        onMouseOver={(e) => highlightLabel(e)}
        onMouseLeave={(e) => highlightLabelEnd(e)}
        onClick={() => test()}
      >
        <Button
          contentEditable="false"
          variant="primary"
          label={ProvisionExample}
        />
        <Button
          contentEditable="false"
          variant="primary"
          label={ViewPlaybookSuggestion}
          onClick={props.toggleDrawer}
        />
      </div>
      <Button
        contentEditable="false"
        variant="secondary"
        label="Close Preview"
        onClick={() => props.setPreviewOpen(!props.previewOpen)}
      />
    </div>
  );
};

const DefaultContract = (props) => {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <article
      className="contract"
      contentEditable="true"
      // onKeyDown={handleKeyPress}
    >
      <h1 className="xl">NON-DISCLOSURE AND CONFIDENTIALITY AGREEMENT</h1>

      <p>
        This Non-Disclosure Agreement (the “Agreement”), is made effective as of{" "}
        <span className="placeholder">[Day]</span>{" "}
        <span className="placeholder">[Month]</span> 2020 (the “Effective
        Date”), by and between, on the one hand,{" "}
        <span className="placeholder">[Investor/Funder]</span> (“Recipient”),
        incorporated by virtue of notarial deed executed on{" "}
        <span className="placeholder">[ ]</span> before the Notary of [ ] with
        protocol number <span className="placeholder">[ ]</span>, with Tax
        Identification Number [ ] and having its registered office at{" "}
        <span className="placeholder">[ ]</span>, represented by{" "}
        <span className="placeholder">[ ]</span>, as its{" "}
        <span className="placeholder">[ ]</span>; and on the other{" "}
        <span className="placeholder">[X]</span>
        (“<span className="placeholder">[X]</span>”), a{" "}
        <span className="placeholder">[•]</span> temporary union of companies
        having its registered office at <span className="placeholder">[•]</span>
        , and with Tax Identification Number{" "}
        <span className="placeholder">[•]</span>; represented by{" "}
        <span className="placeholder">[•]</span>.
      </p>

      <p>
        Recipient and <span className="placeholder">[X]</span> may be referred
        to herein together as the “Parties” and individually as a “Party”.
      </p>

      <p>
        <span id="confidential_information_span" className="labelled">
          <Button
            contentEditable="false"
            variant="tertiary label"
            label={<img src={ML} />}
            // onClick={(e) => getCoords(e)}
            onClick={() => setPreviewOpen(!previewOpen)}
          />
          {previewOpen ? (
            <LabelPreview
              setPreviewOpen={setPreviewOpen}
              previewOpen={previewOpen}
              toggleDrawer={props.toggleDrawer}
            />
          ) : null}
          WHEREAS, the Recipient desires that{" "}
          <span className="placeholder">[X]</span> (“Disclosing Party”) shares
          certain information that is non-public, confidential or proprietary in
          nature,
        </span>{" "}
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
            <li>
              Confidential Information. As used in this Agreement, “Confidential
              Information” means all information whether of a real estate,
              technical, business or other nature that is or may be disclosed or
              imparted by [X] to the Recipient. In particular, Confidential
              Information includes includes all information concerning the
              transaction given to the Recipient in any format, including (i)
              written information such as written documentation or email
              transmission via electronic media, (ii) visual information and
              (iii) oral information
            </li>
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
