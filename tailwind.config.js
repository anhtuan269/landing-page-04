module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      a: '-0.47px',
      b: '-0.5px',
      c: '-0.53px',
      d: '-0.63px',
      e: '-0.75x',
      f: '-1.03px',
      g: '-1.56px',
      h: '-1.88px',
      i: '-2.5px',
    },
    extend: {
      backgroundColor: {
        'blue': '#5454d4',
        'orange': '#ff7143',
        'ground': '#9F3919'
      },
      textColor: {
        'new-blue': '#5454d4',
        'black-01': '#19191B',
        'orange': '#ff7143',
      },
      borderColor: {
        'blue': '#5454d4',
        'ground':'#9F3919'
      },
      borderRadius: {
        '20':'20px',
        '10':'10px'
      },
      lineHeight: {
        'l-14':'14px',
        'l-16': '16px',
        'l-22': '22px',
        'l-24': '24px',
        'l-28': '28px',
        'l-30': '30px',
        'l-40':'40px',
        'l-50': '50px',
        'l-57': '57px',
        'l-60': '60px',
        'l-70': '70px',
        'l-77': '77px'
      },
      width: {
        '460': '460px',
        '610': '610px',
        '475': '475px',
        '555': '555px',
        '525': '525px',
        '330': '330px',
      },
      maxWidth: {
        'tablet': '1070px'
      },
      padding: {
        '01':'10px',
        '02':'20px',
        '03':'30px',
        '04':'40px',
        '05':'50px',
        '06':'60px',
        '100':'100px',
        '150':'150px',
        '035':'35px',
        '03':'30px',
        '03':'30px',
      },
      fontSize: {
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '17':'17px',
        '18': '1.125rem',
        '20': '1.25rem',
        '22': '1.375rem',
        '24': '1.5rem',
        '25':'1.5625rem',
        '28': '1.75rem',
        '34':'2.125rem',
        '42': '2.625rem',
        '50': '3.125rem',
        '60':'3.75rem',
        '80':'5rem',
        '150': '9rem',
        '200':'12.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  
  ],
}
