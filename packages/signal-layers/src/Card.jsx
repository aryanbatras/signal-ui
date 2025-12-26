import {Button} from "./Button";

export function Card(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   * 
   * SIGNALS:   xs, sm, md, lg, xl
   *            centered, rightAligned, leftAligned
   *            imageCircle, imageLandscape
   *            transparent
   *            ineractive
   * 
   * LEASES:    image, imageName, title, description, buttonLabel
   *            onButtonClick
   * 
   * ──────────────────────────────────────────────────────────────────────────── */

    const [signals, signalLayers, leases] = [{ ...contract }, {}, {}];

  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */

    const layer = (name, scope = "card") => (className) =>
      (signalLayers[scope] ||= {},
      signalLayers[scope][name] ||= [],
      (signalLayers[scope][name][0] = className));

    const lease = (name, key = name) =>
      signals[key] && (leases[name] = signals[key]);

    const classes = (layers = {}) =>
      Object.values(layers).map(l => l[0]).filter(Boolean).join(" ");

  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */

    const base               = layer("base",     "card");      
    const layout             = layer("layout",   "card");       
    const spacing            = layer("spacing",  "card");       
    const border             = layer("border",   "card");       
    const shadow             = layer("shadow",   "card");       
    const hover              = layer("hover",    "card");       
    const animation          = layer("animation","card");       
    const escape             = layer("escape",   "card");       

    const imageBase          = layer("base",   "image");      
    const imageSize          = layer("size",   "image");       
    const imageAspect        = layer("aspect", "image");       

    const titleBase          = layer("base",   "title");       
    const titleSize          = layer("size",   "title");       
    const titleLayout        = layer("layout", "title");       

    const descriptionBase    = layer("base",   "description"); 
    const descriptionSize    = layer("size",   "description"); 
    const descriptionLayout  = layer("layout", "description"); 

    const buttonBase         = layer("base",   "button");       


    /* ────────────────────────────────────────────────────────────────────────────
     * DEFAULTS
     * ──────────────────────────────────────────────────────────────────────────── */

    (
        border            ("border-0"),
        spacing           ("p-0 gap-4"),
        hover             ("hover:scale-100"),
        shadow            ("shadow-2xl shadow-gray-800/80"),
        animation         ("transition-all duration-300"),
        base              ("bg-gray-800 text-white rounded-lg"),
        layout            ("flex flex-col justify-items-start"),

        imageBase         ("rounded-lg object-cover"),
        imageSize         ("w-full h-auto"),
        imageAspect       ("aspect-auto"),

        titleBase         ("font-light font-sans font-stretch-condensed px-4 py-0"),
        titleLayout       ("text-left"),
        titleSize         ("text-lg"),

        descriptionBase   ("font-light font-sans font-stretch-condensed px-4 py-0"),   
        descriptionLayout ("text-left"),
        descriptionSize   ("text-lg"),

        buttonBase        ("font-sans mb-2 cursor-pointer") 
    );

  /* ────────────────────────────────────────────────────────────────────────────
   * INTENT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */

    signals.interactive     && hover("cursor-pointer hover:scale-[1.01]");

    signals.xs              && (
                                titleSize("text-md"),
                                descriptionSize("text-xs"),
                                spacing("gap-2"),
                                imageSize("w-auto h-24")
                            );

    signals.sm              && (
                                titleSize("text-lg"),
                                descriptionSize("text-md"),
                                spacing("gap-4"),
                                imageSize("w-auto h-32")
                            );

    signals.md              && (
                                titleSize("text-2xl"),
                                descriptionSize("text-lg"),
                                spacing("gap-6"),
                                imageSize("w-auto h-48")
                            );

    signals.lg              && (
                                titleSize("text-3xl"),
                                descriptionSize("text-xl"),
                                spacing("gap-8"),
                                imageSize("w-auto h-64")
                            );

    signals.xl              && (
                                titleSize("text-4xl"),
                                descriptionSize("text-2xl"),
                                spacing("gap-10"),
                                imageSize("w-auto h-96")
                            );

    signals.centered        && (
                                titleLayout("text-center"),
                                descriptionLayout("text-center")
                            );

    signals.rightAligned    && (
                                titleLayout("text-right"),
                                descriptionLayout("text-right")
                            );

    signals.leftAligned     && (
                                titleLayout("text-left"),
                                descriptionLayout("text-left")
                            );

    signals.imageCircle     && (
                                imageBase("rounded-full aspect-square p-0 object-cover"),
                                layout("flex flex-col justify-center items-center")
                            );

    signals.imageLandscape  && (
                                imageAspect("aspect-video")
                            );

    signals.transparent     && (
                                base("bg-transparent"),
                                shadow("shadow-none")
                            );

  /* ────────────────────────────────────────────────────────────────────────────
   * ESCAPE & NATIVE
   * ──────────────────────────────────────────────────────────────────────────── */

    signals.class         && escape(signals.class);
    signals.className     && escape(signals.className);

    signals.image         && lease("image");
    signals.imageName     && lease("imageName");
    signals.title         && lease("title");
    signals.description   && lease("description");
    signals.buttonLabel   && lease("buttonLabel");
    signals.onButtonClick && lease("onButtonClick");

  /* ──────────────────────────────────────────────────────────────────────────────
   * INTERNAL COMPONENTS
   * ────────────────────────────────────────────────────────────────────────────── */

  const CardMedia = ({ image, imageName, layers }) => 
    image ? <img src={image} className={classes(layers)} alt={imageName} loading="lazy" decoding="async"/> : null;

  const CardBody = ({ title, description, titleLayers, descriptionLayers }) => 
    <>{title && <h3 className={classes(titleLayers)}>{title}</h3>}{description && <p className={classes(descriptionLayers)}>{description}</p>}</>;

  const CardActions = ({ label, onBtnClick, layers }) => 
    <>{label && <Button rounded md border innerShadow hoverNone activeNone className={classes(layers)} onClick={onBtnClick}>{label}</Button>}</>;

  const CardShell = ({ layers, children }) => 
    <div className={classes(layers)}>{children}</div>;

  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */

  return (
    <CardShell 
      layers={signalLayers.card} 
    >

      {leases.image && (
        <CardMedia 
          image={leases.image}
          imageName={leases.imageName} 
          layers={signalLayers.image} 
        />
      )}

      {(leases.title || leases.description) && (
        <CardBody
          title={leases.title}
          description={leases.description}
          titleLayers={signalLayers.title}
          descriptionLayers={signalLayers.description}
        />
      )}

      {leases.buttonLabel && (
        <CardActions
          label={leases.buttonLabel}
          layers={signalLayers.button}
          onBtnClick={leases.onButtonClick}
        />
      )}

    </CardShell>
  );
}