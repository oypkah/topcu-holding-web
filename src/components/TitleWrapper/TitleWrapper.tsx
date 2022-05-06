function TitleWrapper(props: any): React.ReactElement {
  return (
    <div className="nc-titlewrapper align-c typo-light mr-b-60">
      <h1
        className="nc-titlewrapper--tile fs26 f-1 txt-upper animated s008"
        data-animin="fadeInUp|0.1"
        data-animout="fadeOut|0.1"
      >
        {props.children}
      </h1>
    </div>
  );
}

export default TitleWrapper;
