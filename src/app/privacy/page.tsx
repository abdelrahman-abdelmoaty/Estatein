import { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import CustomLink from "@/components/ui/CustomLink";

export const metadata: Metadata = {
  title: "Privacy Policy - Estatein | Data Protection & Privacy",
  description: "Learn how Estatein protects your personal information and data. Our comprehensive privacy policy explains our data collection, usage, and protection practices.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mt-[-50px] bg-[linear-gradient(96deg,#262626_-26.82%,rgba(38,38,38,0.00)_40.46%)] py-[50px] xl:mt-[-70px] xl:py-[100px] dt:mt-[-100px] dt:py-[150px]">
        <div className="container">
          <div className="mb-4 flex items-center gap-2 text-sm text-grey-60">
            <CustomLink href="/" variant="footer">Home</CustomLink>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
          <Heading>Privacy Policy</Heading>
          <Paragraph className="xl:max-w-[80%]">
            At Estatein, we are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy explains how we collect, use, and safeguard your data.
          </Paragraph>
        </div>
      </div>

      <div className="container flex flex-col gap-[60px] py-[80px]">
        {/* Information We Collect */}
        <section>
          <Heading variant="medium">Information We Collect</Heading>
          <div className="mt-6 space-y-6">
            <div>
              <Heading variant="small">Personal Information</Heading>
              <Paragraph className="mt-3">
                We collect personal information that you voluntarily provide to us when you:
              </Paragraph>
              <ul className="mt-4 space-y-2 text-grey-60">
                <li>• Fill out contact forms or inquiry forms</li>
                <li>• Subscribe to our newsletter or marketing communications</li>
                <li>• Create an account on our platform</li>
                <li>• Schedule property viewings or consultations</li>
                <li>• Communicate with our agents or customer service</li>
              </ul>
            </div>

            <div>
              <Heading variant="small">Property Information</Heading>
              <Paragraph className="mt-3">
                When you inquire about properties or use our services, we may collect information about your property preferences, budget range, location preferences, and specific requirements to better serve your real estate needs.
              </Paragraph>
            </div>

            <div>
              <Heading variant="small">Technical Information</Heading>
              <Paragraph className="mt-3">
                We automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, and usage patterns to improve our services and user experience.
              </Paragraph>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section>
          <Heading variant="medium">How We Use Your Information</Heading>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-grey-15 p-6">
              <Heading variant="small">Service Provision</Heading>
              <Paragraph className="mt-3">
                We use your information to provide real estate services, match you with suitable properties, facilitate property viewings, and connect you with appropriate agents.
              </Paragraph>
            </div>
            
            <div className="rounded-xl border border-grey-15 p-6">
              <Heading variant="small">Communication</Heading>
              <Paragraph className="mt-3">
                We use your contact information to respond to inquiries, provide updates about properties, send newsletters (with your consent), and communicate important service information.
              </Paragraph>
            </div>

            <div className="rounded-xl border border-grey-15 p-6">
              <Heading variant="small">Improvement & Analytics</Heading>
              <Paragraph className="mt-3">
                We analyze usage patterns and feedback to improve our website, services, and user experience. This helps us better understand our clients&apos; needs and preferences.
              </Paragraph>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section>
          <Heading variant="medium">Data Protection & Security</Heading>
          <Paragraph className="mt-6">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
          </Paragraph>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-grey-15 p-6">
              <Heading variant="small">Encryption</Heading>
              <Paragraph className="mt-3">
                All sensitive data transmission is protected using SSL encryption technology.
              </Paragraph>
            </div>
            <div className="rounded-xl border border-grey-15 p-6">
              <Heading variant="small">Access Controls</Heading>
              <Paragraph className="mt-3">
                Limited access to personal data on a need-to-know basis for authorized personnel only.
              </Paragraph>
            </div>
            <div className="rounded-xl border border-grey-15 p-6">
              <Heading variant="small">Regular Audits</Heading>
              <Paragraph className="mt-3">
                Regular security assessments and updates to maintain the highest protection standards.
              </Paragraph>
            </div>
            <div className="rounded-xl border border-grey-15 p-6">
              <Heading variant="small">Data Backup</Heading>
              <Paragraph className="mt-3">
                Secure backup systems to prevent data loss and ensure business continuity.
              </Paragraph>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section>
          <Heading variant="medium">Your Privacy Rights</Heading>
          <Paragraph className="mt-6">
            You have several rights regarding your personal information. You may:
          </Paragraph>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-grey-15 p-4">
              <div className="mt-1 h-2 w-2 rounded-full bg-purple-60"></div>
              <div>
                <span className="font-semibold">Access</span> - Request copies of your personal data
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-grey-15 p-4">
              <div className="mt-1 h-2 w-2 rounded-full bg-purple-60"></div>
              <div>
                <span className="font-semibold">Rectification</span> - Request correction of inaccurate or incomplete data
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-grey-15 p-4">
              <div className="mt-1 h-2 w-2 rounded-full bg-purple-60"></div>
              <div>
                <span className="font-semibold">Erasure</span> - Request deletion of your personal data under certain circumstances
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-grey-15 p-4">
              <div className="mt-1 h-2 w-2 rounded-full bg-purple-60"></div>
              <div>
                <span className="font-semibold">Withdraw Consent</span> - Opt out of marketing communications at any time
              </div>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section>
          <Heading variant="medium">Cookies & Tracking</Heading>
          <Paragraph className="mt-6">
            Our website uses cookies to enhance your browsing experience and provide personalized content. Cookies are small text files stored on your device that help us:
          </Paragraph>
          <ul className="mt-4 space-y-2 text-grey-60">
            <li>• Remember your preferences and settings</li>
            <li>• Analyze website traffic and usage patterns</li>
            <li>• Provide relevant property recommendations</li>
            <li>• Ensure website security and prevent fraud</li>
          </ul>
          <Paragraph className="mt-4">
            You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
          </Paragraph>
        </section>

        {/* Third Party Services */}
        <section>
          <Heading variant="medium">Third-Party Services</Heading>
          <Paragraph className="mt-6">
            We may use third-party services to enhance our offerings, including:
          </Paragraph>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-grey-15 p-4 text-center">
              <Heading variant="small">Analytics</Heading>
              <Paragraph className="mt-2 text-sm">
                Website analytics to improve user experience
              </Paragraph>
            </div>
            <div className="rounded-xl border border-grey-15 p-4 text-center">
              <Heading variant="small">Email Services</Heading>
              <Paragraph className="mt-2 text-sm">
                Email delivery and newsletter management
              </Paragraph>
            </div>
            <div className="rounded-xl border border-grey-15 p-4 text-center">
              <Heading variant="small">Map Services</Heading>
              <Paragraph className="mt-2 text-sm">
                Interactive maps for property locations
              </Paragraph>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section>
          <Heading variant="medium">Policy Updates</Heading>
          <Paragraph className="mt-6">
            We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website and indicating the revision date.
          </Paragraph>
        </section>

        {/* Contact */}
        <section className="rounded-xl border border-grey-15 bg-grey-10 p-8">
          <Heading variant="medium">Contact Us About Privacy</Heading>
          <Paragraph className="mt-4">
            If you have any questions about this privacy policy, your data rights, or our privacy practices, please contact us:
          </Paragraph>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-grey-60">Email</span>
                  <p className="font-semibold">privacy@estatein.com</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-grey-60">Phone</span>
                  <p className="font-semibold">+1 (555) 123-4567</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-grey-60">Address</span>
                  <p className="font-semibold">123 Main Street, Suite 400<br />Downtown District</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <CustomLink href="/contact-us" variant="purple" className="w-full text-center">
                Contact Our Privacy Team
              </CustomLink>
              <CustomLink href="/" variant="default" className="w-full text-center">
                Return to Homepage
              </CustomLink>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <div className="text-center text-sm text-grey-60">
          <p>Last updated: December 2024</p>
          <p className="mt-2">This privacy policy is effective immediately upon posting.</p>
        </div>
      </div>
    </>
  );
}