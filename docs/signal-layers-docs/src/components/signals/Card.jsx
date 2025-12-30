import {Button} from "./Button";

export function Card(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ────────────────────────────────────────────────────────────────────────────
   * 
   * Card - Content container with optional image, text, and action button
   *
   * Foundation: Structured layout with image, body, and action sections
   *
   * Signals:
   *   Size: xs, sm, md, lg, xl
   *   Layout: centered, rightAligned, leftAligned
   *   Image: imageCircle, imageLandscape
   *   Style: transparent
   *   Interaction: interactive
   *
   * Data:
   *   image - Image URL or source
   *   imageName - Alt text for image
   *   title - Card title text
   *   description - Card description text
   *   buttonLabel - Button text
   *   onButtonClick - Button click handler
   *
   * Defaults: md, leftAligned
   *
   * Usage:
   * <Card title="Title" description="Description" />
   * <Card image="url.jpg" title="Title" interactive lg />
   * <Card centered transparent buttonLabel="Action" onButtonClick={() => {}} />
   *
   * ──────────────────────────────────────────────────────────────────────────── */

    const [inputSignal, layerSignal, dataSignal] = [{ ...contract }, {}, {}];

  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */

    const layer = (name, scope = "card") => (className) =>
      (layerSignal[scope] ||= {},
      layerSignal[scope][name] ||= [],
      (layerSignal[scope][name][0] = className));

    const data = (name, key = name) =>
      inputSignal[key] && (dataSignal[name] = inputSignal[key]);

    const classes = (layers = {}) =>
      Object.values(layers).map(l => l[0]).filter(Boolean).join(" ");

  /* ────────────────────────────────────────────────────────────────────────────
   * BASE LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */
    let card, image, title, description, button;
    (() => 
        (
            card = {
                base:layer("base",     "card"),
                layout:layer("layout",   "card"),       
                spacing:layer("spacing",  "card"),       
                border:layer("border",   "card"),       
                shadow:layer("shadow",   "card"),       
                hover:layer("hover",    "card"),       
                animation:layer("animation","card") 
            }
        )
    )(),
    (() => 
        (
            image = {
                base:layer("base",   "image"),      
                size:layer("size",   "image"),       
                aspect:layer("aspect", "image")       
            }
        )
    )(),
    (() => 
        (
            title = {
                base:layer("base",   "title"),      
                size:layer("size",   "title"),       
                layout:layer("layout", "title")       
            }
        )
    )(),
      (() => 
        (
            description = {
                base:layer("base",   "description"),      
                size:layer("size",   "description"),       
                layout:layer("layout", "description")       
            }
        )
    )(),
      (() => 
        (
            button = {
                base:layer("base",   "button")     
            }
        )
    )(),
    /* ────────────────────────────────────────────────────────────────────────────
     * DEFAULTS
     * ──────────────────────────────────────────────────────────────────────────── */
      (() => 
            (
                   card.border("border-0"),
                   card.spacing("p-0 gap-4"),
                   card.hover("hover:scale-100"),
                   card.shadow("shadow-2xl shadow-gray-800/80"),
                   card.animation("transition-all duration-300"),
                   card.base("bg-gray-800 text-white rounded-lg"),
                   card.layout("flex flex-col justify-items-start"),
                   image.base("rounded-lg object-cover"),
                   image.size("w-full h-auto"),
                   image.aspect("aspect-auto"),
                   title.base("font-light font-sans font-stretch-condensed px-4 py-0"),
                   title.layout("text-left"),
                   title.size("text-lg"),
                   description.base("font-light font-sans font-stretch-condensed px-4 py-0"),   
                   description.layout("text-left"),
                   description.size("text-lg"),
                   button.base("font-sans mb-2 cursor-pointer") 
              )
      )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * INTERACTIVE SIGNAL
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
            inputSignal.interactive && card.hover("cursor-pointer hover:scale-[1.02]")
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * SIZE SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
             inputSignal.xs && (
                    title.size("text-md"),
                    description.size("text-xs"),
                    card.spacing("gap-2"),
                    image.size("w-auto h-24")
              ),

              inputSignal.sm && (
                    title.size("text-lg"),
                    description.size("text-md"),
                    card.spacing("gap-4"),
                    image.size("w-auto h-32")
                ),

              inputSignal.md && (
                    title.size("text-2xl"),
                    description.size("text-lg"),
                    card.spacing("gap-6"),
                    image.size("w-auto h-48")
                ),

              inputSignal.lg && (
                    title.size("text-3xl"),
                    description.size("text-xl"),
                    card.spacing("gap-8"),
                    image.size("w-auto h-64")
                ),

              inputSignal.xl && (
                    title.size("text-4xl"),
                    description.size("text-2xl"),
                    card.spacing("gap-10"),
                    image.size("w-auto h-96")
                )
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * LAYOUT SIGNALS
   * ──────────────────────────────────────────────────────────────────────────── */
    (() => 
        (
             inputSignal.centered && (
                    title.layout("text-center"),
                    description.layout("text-center")
                ),

             inputSignal.rightAligned && (
                    title.layout("text-right"),
                    description.layout("text-right")
                ),

             inputSignal.leftAligned && (
                    title.layout("text-left"),
                    description.layout("text-left")
                ),

             inputSignal.imageCircle && (
                    image.base("rounded-full aspect-square p-0 object-cover"),
                    card.layout("flex flex-col justify-center items-center")
                ),

             inputSignal.imageLandscape && (
                    image.aspect("aspect-video")
                ),

             inputSignal.transparent && (
                    card.base("bg-transparent"),
                    card.shadow("shadow-none")
                )
        )
    )(),
  /* ────────────────────────────────────────────────────────────────────────────
   * DATA
   * ──────────────────────────────────────────────────────────────────────────── */
   (() => 
        (
            inputSignal.image         && data("image"),
            inputSignal.imageName     && data("imageName"),
            inputSignal.title         && data("title"),
            inputSignal.description   && data("description"),
            inputSignal.buttonLabel   && data("buttonLabel"),
            inputSignal.onButtonClick && data("onButtonClick")
        )
    )();
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
      layers={layerSignal.card} 
    >

      {dataSignal.image && (
        <CardMedia 
          image={dataSignal.image}
          imageName={dataSignal.imageName} 
          layers={layerSignal.image} 
        />
      )}

      {(dataSignal.title || dataSignal.description) && (
        <CardBody
          title={dataSignal.title}
          description={dataSignal.description}
          titleLayers={layerSignal.title}
          descriptionLayers={layerSignal.description}
        />
      )}

      {dataSignal.buttonLabel && (
        <CardActions
          label={dataSignal.buttonLabel}
          layers={layerSignal.button}
          onBtnClick={dataSignal.onButtonClick}
        />
      )}

    </CardShell>
  );
}