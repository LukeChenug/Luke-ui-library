import{j as S}from"./jsx-runtime-z8MfsBtr.js";import{R as k}from"./index-BofL8h0e.js";import"./index-C9rmetsa.js";const s=k.forwardRef(({children:v,variant:t="primary",className:N="",...h},B)=>{const x="rounded-full px-4 py-2 font-medium focus:outline-none",R={primary:"bg-primary text-black hover:bg-primary/80",secondary:"bg-secondary text-black hover:bg-secondary/80",outline:"border-2 border-primary text-black hover:bg-primary/10",disabled:"bg-gray-300 text-gray-500 cursor-not-allowed"};return S.jsx("button",{ref:B,className:`${x} ${R[t]} ${N}`.trim(),disabled:t==="disabled",...h,children:v})});s.displayName="Button";s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline' | 'disabled'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const T={title:"Components/Button",component:s,argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","disabled"]},onClick:{action:"clicked"}},parameters:{layout:"centered"}},e={args:{children:"Primary Button",variant:"primary",className:"rounded-full"}},a={args:{children:"Secondary Button",variant:"secondary",className:"rounded-full"}},r={args:{children:"Outline Button",variant:"outline",className:"rounded-full"}},n={args:{children:"Disabled Button",variant:"disabled",className:"rounded-full"}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary',
    className: 'rounded-full'
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    className: 'rounded-full'
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outline',
    className: 'rounded-full'
  }
}`,...(y=(p=r.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,b,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    variant: 'disabled',
    className: 'rounded-full'
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const q=["Primary","Secondary","Outline","Disabled"];export{n as Disabled,r as Outline,e as Primary,a as Secondary,q as __namedExportsOrder,T as default};
