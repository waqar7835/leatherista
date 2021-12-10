<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* __string_template__d4b450cb4bb8cb23ed144c898c535d692d007ac02f04e3ecc7b8381bfd78d0c4 */
class __TwigTemplate_684f9936fd153a6f3d241047a9b46bd38555fed84c6d92e9e81a87e9a40332a0 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "  <div class=\"latest-initiatives-data\">
    <div class=\"blogimage\">";
        // line 2
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_blogimage"] ?? null), 2, $this->source), "html", null, true);
        echo "</div>
    <div class=\"cetagorydate\">
      <div class=\"category\">";
        // line 4
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_category"] ?? null), 4, $this->source), "html", null, true);
        echo "</div>
      <div class=\"date\">";
        // line 5
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_date"] ?? null), 5, $this->source), "html", null, true);
        echo "</div>
    </div>
    <div class=\"titlebody\">
      <div class=\"title\">";
        // line 8
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 8, $this->source), "html", null, true);
        echo "</div>
      <div class=\"body\">";
        // line 9
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["body"] ?? null), 9, $this->source), "html", null, true);
        echo "</div>
    </div>
    <div class=\"Link to Content\">
      <div class=\"title\">";
        // line 12
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["view_node"] ?? null), 12, $this->source), "html", null, true);
        echo "</div>
    </div>
</div>";
    }

    public function getTemplateName()
    {
        return "__string_template__d4b450cb4bb8cb23ed144c898c535d692d007ac02f04e3ecc7b8381bfd78d0c4";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  67 => 12,  61 => 9,  57 => 8,  51 => 5,  47 => 4,  42 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}  <div class=\"latest-initiatives-data\">
    <div class=\"blogimage\">{{ field_blogimage }}</div>
    <div class=\"cetagorydate\">
      <div class=\"category\">{{ field_category }}</div>
      <div class=\"date\">{{ field_date }}</div>
    </div>
    <div class=\"titlebody\">
      <div class=\"title\">{{ title }}</div>
      <div class=\"body\">{{ body }}</div>
    </div>
    <div class=\"Link to Content\">
      <div class=\"title\">{{ view_node }}</div>
    </div>
</div>", "__string_template__d4b450cb4bb8cb23ed144c898c535d692d007ac02f04e3ecc7b8381bfd78d0c4", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 2);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
