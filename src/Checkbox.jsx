import cx from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import chainedFunction from 'chained-function';
import styles from './index.styl';

class Checkbox extends PureComponent {
    static propTypes = {
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),
        labelClassName: PropTypes.object,
        labelStyle: PropTypes.object,
        disabled: PropTypes.bool,
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        defaultIndeterminate: PropTypes.bool
    };

    static defaultProps = {
        disabled: false,
        defaultIndeterminate: false
    };

    checkbox = null;

    get checked() {
        return this.checkbox.checked;
    }

    get indeterminate() {
        return this.checkbox.indeterminate;
    }

    actions = {
        onChange: () => {
            if (typeof (this.props.indeterminate) !== 'undefined') {
                this.checkbox.indeterminate = this.props.indeterminate;
            }
        }
    }

    render() {
        const {
            label,
            labelClassName,
            labelStyle,
            disabled,
            defaultIndeterminate,

            // Default props
            className,
            children,
            ...props
        } = this.props;

        const onChange = props.onChange || function() {};
        delete props.onChange;
        delete props.indeterminate;

        return (
            <label
                className={cx(
                    className,
                    styles.controlCheckbox,
                    { [styles.disabled]: disabled }
                )}
            >
                <input
                    {...props}
                    type="checkbox"
                    disabled={disabled}
                    className={styles.inputCheckbox}
                    ref={node => {
                        this.checkbox = node;
                        const indeterminate = (typeof (this.props.indeterminate) !== 'undefined') ? this.props.indeterminate : defaultIndeterminate;
                        node && (this.checkbox.indeterminate = indeterminate);
                    }}
                    onChange={chainedFunction(
                        this.actions.onChange,
                        onChange
                    )}
                />
                <i className={styles.controlIndicator} />
                {label ? <span className={cx(styles.textLabel, labelClassName)} style={labelStyle}>{label}</span> : null}
                {children}
            </label>
        );
    }
}

export default Checkbox;
