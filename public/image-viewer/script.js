// Please take note to download the four custom cursors and change the file paths
// Both at the top of the script (for preloading the images) and in the stylesheet

$(function () {

  $('#theme').magnify({
    folder: 'http://ataredo.com/external/image/cursor/',
    recur: true, // Check for the presence of elements with an id - note this might be intensive with large stylesheets
    adapt: true  // Makes it sticky with scrolling
  });
});

(function ($) {

  $.fn.magnify = function (options) {

    var set = $.extend({
      folder: '',
      zoom: 2,
      most: 4,
      recur: false,
      adapt: false
    }, options),

      gate = $(window), aim = this,
      crux = aim.parent(), hype = set.zoom,
      innate = [], ken = {}, spread, orbit, term, pitch,
      jug, forge, range, mock, bore, equal, lead,
      press = 'mousedown touchstart',
      yaw = 'mousemove.area touchmove.area',
      ditch = 'mouseup touchend',
      quash = 'mouseleave touchcancel';

    if (set.folder) heartStash();

    gate.one('load', function () {

      $('#depot').remove();
      attachLorgnette();
      reflectCore();
    })
      .on(quash, function (e) {

        !(e.type == 'mouseleave' && e.relatedTarget) && lotRelease();
      })
      .resize($.restrain(100, tailorEdge, true));

    return this;

    function attachLorgnette() {

      aim.clone().wrap('<div></div>').parent().find('[id]').each(function () {

        innate.push(this);
      })
        .end().queue(function () {

          if (set.recur && innate.length) transFigure();

          keyMass();
          $(this).dequeue();
        })
        .appendTo(forge).children().unwrap().end().queue(function () {

          instillAnnex();
          $(this).dequeue();
        });

      function keyMass() {

        aim.prepend(ken.zone[0]);
        mock = $('#emulous');
        jug = $('#alembic');
        forge = $('#mirror');
        range = $('#scope');
      }

      function instillAnnex() {

        bore = range.width() / 2;
        equal = $(forge[0].firstChild);

        aim.css('position') == 'static' && aim.add(equal).css('position', 'relative');

        forge.css('background', ken.getLayer(crux));
        jug.append(ken.zone[1]);
        lead = $('.coact button');
        dataField();
        readPosition();
        shapeShift(equal, ken.put, ken.fix, true);
        outerBounds();
        panelMode();
        keepTrack();

        set.adapt && mock.append(ken.zone[1].clone()).find('button').empty();
      }

      function transFigure() {

        var sheet = document.styleSheets[0],
          styles = sheet.cssRules, rules = [],
          opt = '-magnified';

        $.each(innate, function () {

          var tag = this.id, bit = '#' + tag,
            pattern = new RegExp(bit + '(:| |,)');

          $.each(styles, function () {

            if (pattern.test(this.cssText)) {
              var twin = this.cssText.replace(bit, bit + opt);
              rules.push(twin);
            }
          });

          $(this).attr('id', tag + opt);
        });

        $.each(rules, function () {

          sheet.insertRule(this, styles.length);
        });
      }

      function panelMode() {

        lead.not(':eq(1)').addClass('ratio').click(function () {

          var grow = $(this).text() == '+';

          if (grow && hype < set.most) hype += 0.5;
          if (!grow && hype > 1) hype -= 0.5;

          lead.eq(1).text(hype);
          readPosition();
          shapeShift(equal, ken.put, ken.fix, true);
        })
          .end().eq(1).click(function () {

            $('.ratio').toggle();

            $(this).text(function (index, value) {

              return value == '' ? hype : '';
            });
          })
          .parent().mousedown(function (e) {

            e.preventDefault();
          });
      }
    }

    function reflectCore() {

      if (set.adapt) gate.scroll(keepTrack).scroll($.restrain(40, mainNavigation, true));

      range.on(press, function (e) {

        range.addClass('drag');
        pinPoints(e);

        gate.one(ditch, lotRelease).on(yaw, baseTrace).on(yaw, $.restrain(30, alterState));

        e.preventDefault();
      });

      function pinPoints(act) {

        var nod = act.originalEvent.touches;
        ken.startX = nod ? nod[0].pageX : act.pageX;
        ken.startY = nod ? nod[0].pageY : act.pageY;
        ken.onsetX = ken.iota.left;
        ken.onsetY = ken.iota.top;
      }

      function baseTrace(task) {

        var rub = task.originalEvent.touches,
          nowX = rub ? rub[0].pageX : task.pageX,
          nowY = rub ? rub[0].pageY : task.pageY,
          sumX = ken.onsetX + nowX - ken.startX,
          sumY = ken.onsetY + nowY - ken.startY,
          altY = ken.travel - ken.unit.top - bore;
        ken.newX = Math.max(0, Math.min(sumX, term));
        ken.newY = Math.max(-bore, Math.min(sumY, pitch - bore));
        if (set.adapt) ken.newY = Math.max(altY, Math.min(ken.newY, altY + ken.niche));
        ken.pegX = ken.newX - ken.onsetX + 'px';
        ken.pegY = ken.newY - ken.onsetY + 'px';
      }

      function alterState() {

        ken.iota = { top: ken.newY, left: ken.newX };
        shapeShift(jug, ken.pegX, ken.pegY);
        readPosition(true);
        shapeShift(equal, ken.put, ken.fix, true);
      }
    }

    function dataField() {

      ken.niche = gate.height();
      spread = crux.width();
      orbit = crux.height();
      ken.unit = aim.offset();
      term = aim.width();
      pitch = aim.height();
      ken.weigh = crux.offset().left - ken.unit.left;
    }

    function readPosition(vivid) {

      if (!vivid) ken.iota = jug.position();

      var mid = ken.iota.top - pitch / 2,
        hub = ken.iota.left - term / 2;
      ken.dip = jug.offset();
      ken.fix = -(pitch / 2 + hype * (mid + bore) - bore) + 'px';
      ken.put = -(term / 2 + hype * hub - bore) + 'px';
      ken.yard = { left: ken.dip.left + 'px' };
      ken.beat = {
        top: (ken.iota.top + bore) / pitch,
        left: ken.iota.left / term
      };
    }

    function keepTrack() {

      ken.travel = gate.scrollTop();
      var rise = ken.travel < ken.ere,
        jibe = rise == ken.ante || ken.travel == ken.ere,
        above = ken.travel > ken.unit.top - ken.niche + bore,
        below = ken.travel < ken.unit.top + pitch - bore,
        maiden = ken.travel > ken.dip.top + bore,
        ambit = jug[0].getBoundingClientRect();
      if (maiden) ken.note = true;
      ken.seen = above && below && ken.note;
      ken.clue = ambit.bottom < bore;
      ken.hint = ambit.top > ken.niche - bore;
      ken.ere = ken.travel;
      ken.ante = rise;

      if (!ken.seen && !mock.hasClass('obscure')) {
        clearTimeout(ken.impel);
        ken.yard.top = ken.unit.top - ken.travel;
        if (!below) ken.yard.top += pitch - 2 * bore;
        shapeShift(mock, ken.yard.left, ken.yard.top + 'px');
        ken.impel = setTimeout(rawState, 150);
      }

      if (!jibe && ken.impel) {
        clearTimeout(ken.impel);
        rawState();
        ken.loose = true;
      }
    }

    function mainNavigation() {

      if (!ken.seen || !(ken.clue || ken.hint)) return;

      if (ken.loose) {
        ken.loose = false;
        return;
      }

      clearTimeout(ken.impel);
      sceneFacet();

      mock.removeClass('obscure');
      shapeShift(mock, ken.yard.left, ken.yard.top + 'px');
      jug.addClass('obscure');

      ken.impel = setTimeout(rawState, 150);
    }

    function sceneFacet() {

      ken.whirl = ken.travel - ken.unit.top - bore;

      if (ken.clue) ken.yard.top = -bore;
      else {
        ken.yard.top = ken.niche - bore;
        ken.whirl += ken.niche;
      }

      ken.whirl = Math.max(0, Math.min(ken.whirl, pitch - 2 * bore));
    }

    function rawState() {

      keepTrack();
      sceneFacet();
      mock.addClass('obscure');
      jug.removeClass('obscure').css('top', ken.whirl);
      readPosition();
      shapeShift(equal, ken.put, ken.fix, true);
      ken.impel = 0;
    }

    function tailorEdge() {

      if (!bore) return;

      dataField();
      outerBounds();

      var pivot = {
        top: ken.beat.top * pitch - bore,
        left: ken.beat.left * term
      };

      jug.css(pivot);
      readPosition();
      shapeShift(equal, ken.put, ken.fix, true);
      gate.scroll();
    }

    function shapeShift(target, zest, ardor, extent) {

      var mark = 'translate(' + zest + ',' + ardor + ')';
      if (extent) mark += 'rotate(0.01deg) scale(' + hype + ')';

      target.css({ '-webkit-transform': mark, transform: mark });
    }

    function outerBounds() {

      forge.css({ width: spread, height: orbit, left: ken.weigh });
    }

    function lotRelease() {

      jug.removeAttr('style').css(ken.iota);
      range.removeClass('drag');
      gate.off(yaw);
    }

    function heartStash() {

      $('body').append('<div id="depot"></div><div id="emulous" class="obscure"></div>');

      $.each(['touch.cur', 'touch.png', 'swipe.cur', 'swipe.png'], function () {

        $('#depot').append('<img src="' + set.folder + this + '" alt=""/>');
      });

      ken.zone = (function () {

        var tree = $('<div>', { id: 'mirror' }), ilk = $('<div>', { class: 'coact' });

        $.each(['scope', 'glass', 'alembic', 'vial'], function (order) {

          var item = '<div id="' + this + '"></div>';

          if (!order) tree = tree.add(item);
          else tree = tree.wrapAll(item).parent();
        });

        $.each(['-', hype, '+'], function () {

          ilk.append('<button type="button">' + this + '</button>');
        });

        return [tree, ilk];
      })();

      ken.getLayer = (function (idea) {

        var quirk = ['color', 'image', 'position', 'size', 'repeat', 'attachment', 'origin', 'clip'],
          digest = '';

        $.each(quirk, function (allot, trait) {

          var judge = idea.css('background-' + trait);

          if (allot == 2) digest += judge + ' / ';
          else digest += judge + ' ';
        });

        return digest;
      });

      $.restrain = function (pace, callback, hind) {

        var executed = 0, debounce, throttle = function () {

          var elapsed = Math.min(pace, Date.now() - executed),
            remain = pace - elapsed;
          debounce && clearTimeout(debounce);
          elapsed == pace && runIt();

          if (hind && remain) debounce = setTimeout(runIt, remain);

          function runIt() {
            executed = Date.now();
            callback.apply(this, arguments);
          }
        }

        return throttle;
      }
    }
  };
}(jQuery));