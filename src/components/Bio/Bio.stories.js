import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio
};

const Template = () => (
  <Bio
    headshot="https://media-exp2.licdn.com/dms/image/C4D03AQEPaCAHLkI8FQ/profile-displayphoto-shrink_800_800/0/1653202681957?e=1662595200&v=beta&t=oE8RSbJ07Q1ksngOC17DxESG266xQBS3ptaWYvNKcdQ"
    name="Akil Varlı"
    tagline="Helping Others learn by doing!"
    role="Developer Advocate @ Applitools"
  />
);

export const Default = Template.bind({});
