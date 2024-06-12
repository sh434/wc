import Heading from "../../globalComponents/molecules/Heading";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section className="container my-5">
      <div className="policyTextContainer">
        <ul>
          <Heading
            text="1. GENERAL"
            fontSize="1.25rem"
            className="policyHeading"
          />

          <li>
            This document is an electronic record in terms of Information
            Technology Act, 2000 and rules there under as applicable and the
            amended provisions pertaining to electronic records in various
            statutes as amended by the Information Technology Act, 2000. This
            electronic record is generated by a computer system and does not
            require any physical or digital signatures.
          </li>

          <li>
            This document is published in accordance with the provisions of Rule
            3 (1) of the Information Technology (Intermediaries guidelines)
            Rules, 2011 that require publishing the rules and regulations,
            privacy policy and Terms of Use for access or usage of
            www.wealth-clinic.com
          </li>

          <li>
            The domain name www.wealth-clinic.com ("Website"), is owned and
            operated by Wealth Clinic Pvt. Ltd.("Company") a Private Company
            limited by shares, incorporated under the provisions of the
            Companies Act, 2013, where such expression shall, unless repugnant
            to the context thereof, be deemed to include its respective
            representatives, administrators, employees, directors, officers,
            agents and their successors and assigns.
          </li>

          <li>
            This privacy policy is effective from the date and time a user
            registers with Wealth Clinic by filling up the details and accepting
            the terms and conditions laid out in the Site Policy.
          </li>
        </ul>

        <ul>
          <Heading
            text="2. COLLECTION OF PERSONAL AND OTHER INFORMATION"
            fontSize="1.25rem"
            className="policyHeading"
          />
          <li>
            In order to provide a personalized browsing experience, the Company
            may collect personal information from you. Additionally, our website
            may also require you to complete a registration form or seek some
            information from you.
          </li>
          <li>
            The User is aware that the Company/Website may automatically track
            certain information about the User based upon the User's IP address
            and the User’s behavior on the Website, and the User expressly
            consents to the same. The User is aware that this information is
            used to do internal research on user demographics, interests, and
            behavior, to enable the Company/Website to better understand, and
            cater to the interests of its users. The User is expressly made
            aware that such information may include the URL that the User
            visited prior to accessing the Website, the URL which the User
            subsequently visits (whether or not these URLs form a part of the
            Website), the User's computer & web browser information, the User's
            IP address, etc.
          </li>
        </ul>

        <ul>
          <Heading
            text="3. DIVULGING/SHARING OF PERSONAL INFORMATION"
            fontSize="1.25rem"
            className="policyHeading"
          />

          <li>
            The User is aware that the Website/Company may share the User's
            personal information with other corporate entities and affiliates to
            help detect and prevent identity theft, fraud and other potentially
            illegal acts; correlate related or multiple accounts to prevent
            abuse of the Website's services; and to facilitate joint or
            co-branded services, where such services are provided by more than
            one corporate entity.
          </li>

          <li>
            The User is aware that the Website/Company may disclose personal
            information if required to do so by law or if the Website/Company in
            good faith believes that such disclosure is reasonably necessary to
            respond to subpoenas, court orders, or other legal processes. The
            Website/Company may also disclose the User's personal information to
            law enforcement offices, third party rights owners, or other third
            parties if it believes that such disclosure is reasonably necessary
            to enforce the Terms or Policy; respond to claims that an
            advertisement, posting or other content violates the rights of a
            third party; or protect the rights, property or personal safety of
            its users, or the general public.
          </li>
        </ul>

        <ul>
          <Heading
            text="4. USER'S RESPONSIBILITY AND CONSENT"
            fontSize="1.25rem"
            className="policyHeading"
          />

          <li>
            The user is solely responsible for maintaining confidentiality of
            the user password and user identification and other related
            activities performed by the user. Moreover, the user shall be solely
            responsible for carrying out any online or off-line transaction that
            involves credit cards / debit cards or such other forms of
            instruments or documents for making such transactions.
          </li>

          <li>
            By using the Website and/ or by providing information to the Company
            through the Website, the User consents to the collection and use of
            the information disclosed by the User on the Website in accordance
            with this Policy, including but not limited to the User's consent
            the Company/Website sharing/divulging the User's information, as per
            the terms contained hereinabove in Section 3 of the Policy.
          </li>
        </ul>

        <ul>
          <Heading
            text="5. SECURITY"
            fontSize="1.25rem"
            className="policyHeading"
          />

          <li>
            Transactions on the Website are secure and protected. Any
            information entered by the User when transacting on the Website is
            encrypted to protect the User against unintentional disclosure to
            third parties. The User's credit and debit card information is not
            received, stored by or retained by the Company / Website in any
            manner. This information is supplied by the User directly to the
            relevant payment gateway which is authorized to handle the
            information provided, and is compliant with the regulations and
            requirements of various banks and institutions and payment
            franchisees that it is associated with.
          </li>
          <li>
            The Company assumes no responsibility or liability for their
            improper usage of information relating to such usage of credit cards
            / debit cards used by the subscriber online / off-line.
          </li>
        </ul>

        <ul>
          <Heading
            text="6. DISPUTE RESOLUTION AND JURISDICTION"
            fontSize="1.25rem"
            className="policyHeading"
          />

          <li>
            Mediation: In case of any dispute between the parties, the Parties
            will attempt to resolve the same amicably amongst themselves, to the
            mutual satisfaction of both Parties. In the event that the Parties
            are unable to reach such an amicable solution within thirty (30)
            days of one Party communicating the existence of a dispute to the
            other Party, the dispute will be resolved by arbitration, as
            detailed herein below;
          </li>
          <li>
            Arbitration: In the event that the Parties are unable to amicably
            resolve a dispute by mediation, said dispute will be referred to
            arbitration by a sole arbitrator to be appointed by the Company, and
            the award passed by such sole arbitrator will be valid and binding
            on both Parties. The Parties shall bear their own costs for the
            proceedings, although the sole arbitrator may, in his/her sole
            discretion, direct either Party to bear the entire cost of the
            proceedings. The arbitration shall be conducted in English, and the
            seat of Arbitration shall be the state of New Delhi India.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
