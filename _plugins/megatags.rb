module Jekyll
  class SideNoteTag < Liquid::Tag
    def initialize(tag_name, note_content, tokens)
      super
      @note = note_content
    end

    def render(context)
        return "<div class=\"aside\">
  <div class=\"aside-i\">
    <div>
      <p>#{@note}</p></div></div></div>"
    end
  end

  class FigureTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @img, *@desc = text.split(/~/)
      if @desc.length > 0
        @output = "<div class=\"figure\">
  <img src=\"#{@img}\" class=\"figure__img\">
  <div class=\"figure-i\">
    <div class=\"figure__caption\">
        #{@desc}
    </div></div></div>"
      else
        @output = "<div class=\"figure\">
  <img src=\"#{@img}\" class=\"figure__img\">
  </div>"
      end
    end

    def render(context)
        return @output
    end
  end

  class SpreadTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @img, *@desc = text.split(/~/)
      if @desc.length > 0
        @output = "<div class=\"spread\">
  <div class=\"spread-i\">
  <img src=\"#{@img}\" class=\"figure__img\">
  <div class=\"figure-i\">
    <div class=\"figure__caption\">
        #{@desc}
    </div></div></div></div>"
      else
        @output = "<div class=\"spread\">
  <div class=\"spread-i\">
  <img src=\"#{@img}\" class=\"figure__img\">
  </div></div>"
      end
    end

    def render(context)
        return @output
    end
  end
end

Liquid::Template.register_tag('sidenote', Jekyll::SideNoteTag)
Liquid::Template.register_tag('figure', Jekyll::FigureTag)
Liquid::Template.register_tag('spread', Jekyll::SpreadTag)