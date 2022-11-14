export interface Quote {
    body: string,
    author: string,
  }
  
  export interface QuoteProp {
    quote?: Quote,
    setQuote?: Function
  }